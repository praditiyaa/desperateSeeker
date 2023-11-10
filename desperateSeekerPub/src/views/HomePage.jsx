import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cards from '../components/Cards.jsx';
import NavbarBot from '../components/NavbarBot.jsx';
import LimitPage from '../components/LimitPage.jsx';
import Pagination from '../components/Pagination.jsx';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';

const HomePage = () => {
  const [mainData, setMainData] = useState({}); // for fetching data
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState(window.location.search);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      if (!params) {
        const { data } = await axios.get('https://norepine.tech/public');
        setMainData(data);
      } else {
        const { data } = await axios.get(
          `https://norepine.tech/public${params}`
        );
        setMainData(data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const clickOnDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, [params]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <NavbarBot search={search} setSearch={setSearch} />
      <main className='flex justify-center overflow-auto items-center'>
        <article className='card-container h-[72vh] grid grid-cols-2 gap-5 justify-center'>
          {mainData?.result?.data.map((datum) => (
            <Cards
              img={datum.imgURL}
              jobType={datum.jobType}
              title={datum.title}
              desc={datum.description}
              comName={datum.Company.name}
              clickOnDetail={() => clickOnDetail(datum.id)}
            />
          ))}
        </article>
      </main>
      <footer className='flex absolute inset-x-0 bottom-0 mb-10 justify-between'>
        <LimitPage setParams={setParams} />
        <Pagination
          setParams={setParams}
          pages={mainData?.result?.totalPage}
          KeyboardArrowLeft={KeyboardArrowLeft}
          KeyboardArrowRight={KeyboardArrowRight}
        />
      </footer>
    </>
  );
};

export default HomePage;
