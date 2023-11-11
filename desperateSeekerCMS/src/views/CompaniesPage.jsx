import { useEffect, useState } from 'react';
import Table from '../components/Table';
import axios from 'axios';

const ComPage = () => {
  const [loading, setLoading] = useState(false);
  const [comData, setComData] = useState([]);
  const [error, setError] = useState(false);

  const fetchCom = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('https://norepine.tech/companies', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setComData(data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCom();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <Table comData={comData} />
    </>
  );
};

export default ComPage;
