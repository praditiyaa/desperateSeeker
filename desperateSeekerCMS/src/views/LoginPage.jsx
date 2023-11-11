import { Link, useOutletContext, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [log, setLog] = useOutletContext(false);
  const [error, setError] = useState(false);
  const [credential, setCredential] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const postLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        'https://norepine.tech/login',
        credential
      );
      localStorage.setItem('token', response.data.token);
      navigate('/jobs');
      setLog(true);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <div className='flex flex-row h-5/6 justify-center items-center'>
        <div className='h-full w-max flex justify-center items-center '>
          <img
            src='/src/assets/priscilla-du-preez-nNMBa7Y1Ymk-unsplash.jpg'
            className='w-96 h-96 object-cover shadow-md -mr-10 rounded-md'
            alt=''
          />
          <article className='flex flex-col -ml-10 w-fit h-fit items-center z-10'>
            <h1 className='text-5xl translate-y-5 font-bold'>Login</h1>
            <div className='max-h-fit w-80 p-6 text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border'>
              <form className='flex flex-col mt-2' onSubmit={postLogin}>
                {error && (
                  <p className='text-base self-center mb-5 text-red-400'>
                    {error}
                  </p>
                )}
                <div className='relative z-0 w-full mb-6 group'>
                  <input
                    type='text'
                    value={credential.email}
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer'
                    placeholder=''
                    onChange={(e) => {
                      setCredential({ ...credential, email: e.target.value });
                    }}
                  />
                  <label
                    htmlFor='floating_email'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Email address
                  </label>
                </div>
                <div className='relative z-0 w-full mb-6 group'>
                  <input
                    type='password'
                    value={credential.password}
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer'
                    placeholder=' '
                    onChange={(e) => {
                      setCredential({
                        ...credential,
                        password: e.target.value,
                      });
                    }}
                  />
                  <label
                    htmlFor='floating_password'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Password
                  </label>
                </div>
                <button
                  type='submit'
                  className='text-white self-center bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
                >
                  Submit
                </button>
              </form>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
