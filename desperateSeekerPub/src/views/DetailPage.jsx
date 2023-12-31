import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
  const [oneData, setOneData] = useState({});
  const [filter, setFiltered] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://norepine.tech/public/${id}`);
      setOneData(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const clickOnFilter = () => {
    filter ? setFiltered(false) : setFiltered(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <main className='flex flex-col items-center'>
        <img
          src={oneData?.imgURL}
          alt=''
          className='artboard mt-10 rounded-md artboard-horizontal phone-5 bg-cover shadow'
        />
        <div className='-mt-64 max-h-fit w-[50rem] text-gray-700 bg-white shadow-md rounded-xl bg-clip-border'>
          <div className='p-2 flex flex-col'>
            <img
              src={oneData?.Company?.companyLogo}
              alt=''
              className='-mt-20 w-40 h-40 ml-5 rounded-lg'
            />
            <div className='m-5'>
              <h3 className='block mb-2 text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900'>
                {oneData?.title}
              </h3>
              <h3 className='block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
                {oneData?.Company?.name}
              </h3>
              <div className='flex gap-1 mb-2'>
                <p className='block font-semibold text-base antialiased leading-relaxed text-inherit'>
                  {oneData?.Company?.location}
                </p>
                <p className='block font-semibold text-base antialiased leading-relaxed text-inherit'>
                  -
                </p>
                <p className='block font-semibold text-base antialiased leading-relaxed text-inherit'>
                  {oneData?.jobType}
                </p>
                <p className='block font-semibold text-base antialiased leading-relaxed text-inherit'>
                  -
                </p>
                <p className='block font-semibold text-base antialiased leading-relaxed text-inherit'>
                  {oneData?.Company?.email}
                </p>
              </div>
              <hr className='h-px my-3 bg-gray-200 border-0' />
              <h3 className='block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
                Job Descriptions:
              </h3>
              <p className='block text-base antialiased font-light leading-relaxed text-inherit'>
                {oneData?.description}
              </p>
            </div>
            <div className='m-5 pt-0 self-end'>
              <button
                className='select-none rounded-lg bg-gray-500 py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                type='button'
                data-ripple-light='true'
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailPage;
