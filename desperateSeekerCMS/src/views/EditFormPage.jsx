import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';

const EditForm = ({ fetchJobs }) => {
  const template = {
    title: '',
    description: '',
    jobType: '',
    companyId: '',
    authorId: '',
  };
  const [jobData, setJobData] = useState(template);
  const [error, setError] = useState(template);
  const [comData, setComData] = useState([]);
  const [imgData, setImgData] = useState();
  const [status, setStatus] = useState();

  const { jobId } = useParams();

  const populateEdit = async () => {
    try {
      const { data } = await axios.get(
        `https://norepine.tech/jobs/detail/${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setJobData(data.data);
      setStatus(false);
    } catch (error) {
      setError(error);
    }
  };

  const fetchCom = async () => {
    try {
      const { data } = await axios.get('https://norepine.tech/companies', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setComData(data.data);
    } catch (error) {
      setError(error);
    }
  };

  const editJob = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.put(
        `https://norepine.tech/jobs/${jobId}`,
        jobData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );

      const form = new FormData();
      form.append('imgData', imgData);

      await axios.patch(`https://norepine.tech/jobs/${jobId}`, form, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      setStatus(response.data.updated.title);
      setTimeout(() => {
        fetchJobs();
      }, 2000);
      setError(template);
    } catch (err) {
      if (err.response.status === 404) {
        setError(err.response.data);
      } else {
        setError(err.response.data.message);
      }
      setStatus(false);
    }
  };

  useEffect(() => {
    fetchCom();
  }, []);

  useEffect(() => {
    if (jobId) populateEdit();
  }, [jobId]);

  return (
    <>
      <Form
        error={error}
        jobId={jobId}
        status={status}
        editJob={editJob}
        comData={comData}
        jobData={jobData}
        setJobData={setJobData}
        setImgData={setImgData}
      />
    </>
  );
};

export default EditForm;
