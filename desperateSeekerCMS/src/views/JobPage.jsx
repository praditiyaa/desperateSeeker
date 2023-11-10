import { useEffect, useState } from 'react';
import Table from '../components/Table';
import axios from 'axios';

const JobPage = () => {
  const [jobData, setJobData] = useState([]); // for fetching data
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('https://norepine.tech/jobs', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setJobData(data.data);
    } catch (error) {
      setLoading(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <Table jobData={jobData} />
    </>
  );
};

export default JobPage;
