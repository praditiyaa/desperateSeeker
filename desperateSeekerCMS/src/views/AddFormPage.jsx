import { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';

const AddForm = ({ fetchJobs }) => {
  const template = {
    title: '',
    description: '',
    imgURL: '',
    jobType: '',
    companyId: '',
    authorId: '',
  };
  const [jobData, setJobData] = useState(template);
  const [error, setError] = useState(template);
  const [comData, setComData] = useState([]);
  const [status, setStatus] = useState();

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

  const postJob = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post('https://norepine.tech/jobs', jobData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setStatus(response.data.message);
      setTimeout(() => {
        fetchJobs();
      }, 2000);
      setError(template);
    } catch (err) {
      setStatus(false);
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    fetchCom();
  }, []);
  return (
    <>
      <Form
        error={error}
        status={status}
        comData={comData}
        jobData={jobData}
        postJob={postJob}
        setJobData={setJobData}
      />
    </>
  );
};

export default AddForm;
