import { Link, useOutletContext, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AddForm = ({}) => {
  const [comData, setComData] = useState([]); // for fetching data
  const [status, setStatus] = useState();
  const [error, setError] = useState({
    title: '',
    description: '',
    imgURL: '',
    jobType: '',
    companyId: '',
    authorId: '',
  });
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    imgURL: '',
    jobType: '',
    companyId: '',
    authorId: '',
  });

  const navigate = useNavigate();

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
      setError({
        title: '',
        description: '',
        imgURL: '',
        jobType: '',
        companyId: '',
        authorId: '',
      });
      navigate('/jobs');
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
      <div className='flex flex-col h-5/6 justify-center z-50 items-center'>
        <h1 className='text-5xl translate-y-5 font-bold'>Add New Job</h1>
        <article className=''>
          <div className='flex flex-col max-h-fit w-[30rem] mt-5 p-6 text-gray-700 bg-white shadow-md rounded-xl bg-clip-border'>
            {status && (
              <p className='text-sm self-center mb-3 text-red-400'>{status}</p>
            )}
            <form className='mt-1' onSubmit={postJob}>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='text'
                  value={jobData.title}
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  onChange={(e) => {
                    setJobData({ ...jobData, title: e.target.value });
                  }}
                />
                <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Title
                </label>
                {error.title && (
                  <p className='text-sm self-center mt-1 text-red-400'>
                    {error.title}
                  </p>
                )}
              </div>
              <div className='relative z-0 w-full mb-6 group'>
                <label className='block mb-2 text-sm font-medium text-gray-500'>
                  Job Description
                </label>

                <textarea
                  value={jobData.description}
                  rows={4}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  placeholder='Write the description here...'
                  onChange={(e) => {
                    setJobData({ ...jobData, description: e.target.value });
                  }}
                />
                {error.description && (
                  <p className='text-sm self-center mt-1 text-red-400'>
                    {error.description}
                  </p>
                )}
              </div>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='text'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  value={jobData.imgURL}
                  onChange={(e) => {
                    setJobData({ ...jobData, imgURL: e.target.value });
                  }}
                />
                <label
                  htmlFor='floating_imgURL'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Image URL
                </label>
                {error.imgURL && (
                  <p className='text-sm self-center mt-1 text-red-400'>
                    {error.imgURL}
                  </p>
                )}
              </div>
              <div className='grid md:grid-cols-2 md:gap-6'>
                <div className='relative z-0 w-full mb-6 group'>
                  <label className='block mb-2 text-sm font-medium text-gray-500'>
                    Type Of Job
                  </label>
                  <select
                    value={jobData.jobType}
                    onChange={(e) => {
                      setJobData({ ...jobData, jobType: e.target.value });
                    }}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  >
                    <option disabled selected=''>
                      Choose a type
                    </option>
                    <option value='Full Time'>Full Time</option>
                    <option value='Part Time'>Part Time</option>
                  </select>
                  {error.jobType && (
                    <p className='text-sm self-center mt-1 text-red-400'>
                      {error.jobType}
                    </p>
                  )}
                </div>
                <div className='relative z-0 w-full mb-6 group'>
                  <label className='block mb-2 text-sm font-medium text-gray-500'>
                    Company
                  </label>
                  <select
                    value={jobData.companyId}
                    onChange={(e) => {
                      setJobData({ ...jobData, companyId: e.target.value });
                    }}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  >
                    <option disabled selected=''>
                      Your Company
                    </option>
                    {comData.map((data) => (
                      <option value={data.id}>{data.name}</option>
                    ))}
                  </select>
                  {error.companyId && (
                    <p className='text-sm self-center mt-1 text-red-400'>
                      {error.companyId}
                    </p>
                  )}
                </div>
              </div>
              <button
                type='submit'
                className='text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
              >
                Submit
              </button>
            </form>
          </div>
        </article>
      </div>
    </>
  );
};

export default AddForm;
