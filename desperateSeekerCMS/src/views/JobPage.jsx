import { useEffect, useState } from 'react';
import Table from '../components/Table';
import axios from 'axios';

const JobPage = () => {
  const [loading, setLoading] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState();

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('https://norepine.tech/jobs', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setJobData(data.data);
      setStatus();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const delJob = async (jobId) => {
    try {
      const result = await axios.delete(`https://norepine.tech/jobs/${jobId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setStatus(result.data.message);
      setTimeout(() => {
        fetchJobs();
      }, 2000);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <Table
        jobData={jobData}
        status={status}
        fetchJobs={fetchJobs}
        delJob={delJob}
      />
    </>
  );
};

export default JobPage;
