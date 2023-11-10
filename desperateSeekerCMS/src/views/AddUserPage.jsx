import { Link, useOutletContext, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AddUserPage = () => {
  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });
  const [status, setStatus] = useState();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });

  const navigate = useNavigate();

  const postUser = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        'https://norepine.tech/user',
        userData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
      setStatus(response.data.data.email);
      setError({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
      });
      navigate('/register');
    } catch (err) {
      setStatus(false);
      setError(err.response.data.message);
    }
  };

  return (
    <div className='flex flex-row h-5/6 justify-center items-center'>
      <article className='flex flex-col translate-x-32 z-10'>
        <h1 className='text-5xl -mt-10 self-center z-10 font-bold'>
          Add New User
        </h1>
        <div className='flex flex-col w-[30rem] max-h-fit -mt-5 p-6 bg-white shadow-md rounded-xl bg-clip-border'>
          {status && (
            <p className='text-sm self-center mb-1 text-red-400'>
              {status} has been added
            </p>
          )}
          <form className='mt-5' onSubmit={postUser}>
            <div className='relative z-0 w-full mb-6 group'>
              <input
                type='text'
                value={userData.username}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer'
                placeholder=' '
                onChange={(e) => {
                  setUserData({ ...userData, username: e.target.value });
                }}
              />
              <label
                htmlFor='floating_username'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Username
              </label>
              {error.username && (
                <p className='text-sm self-center mb-1 text-red-400'>
                  {error.username}
                </p>
              )}
            </div>
            <div className='relative z-0 w-full mb-6 group'>
              <input
                type='text'
                value={userData.email}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer'
                placeholder=' '
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
              />
              <label
                htmlFor='floating_email'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Email address
              </label>
              {error.email && (
                <p className='text-sm self-center mb-1 text-red-400'>
                  {error.email}
                </p>
              )}
            </div>
            <div className='relative z-0 w-full mb-6 group'>
              <input
                type='password'
                value={userData.password}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer'
                placeholder=' '
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
              />
              <label
                htmlFor='floating_password'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Password
              </label>
              {error.password && (
                <p className='text-sm self-center mb-1 text-red-400'>
                  {error.password}
                </p>
              )}
            </div>
            <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='tel'
                  value={userData.phoneNumber}
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer'
                  placeholder=' '
                  onChange={(e) => {
                    setUserData({ ...userData, phoneNumber: e.target.value });
                  }}
                />
                <label
                  htmlFor='floating_phone'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Phone number
                </label>
                {error.phoneNumber && (
                  <p className='text-sm self-center mb-1 text-red-400'>
                    {error.phoneNumber}
                  </p>
                )}
              </div>
              <div className='relative z-0 w-full mb-6 group'>
                <input
                  type='text'
                  value={userData.address}
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer'
                  placeholder=' '
                  onChange={(e) => {
                    setUserData({ ...userData, address: e.target.value });
                  }}
                />
                <label
                  htmlFor='floating_address'
                  className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Address
                </label>
                {error.address && (
                  <p className='text-sm self-center mb-1 text-red-400'>
                    {error.address}
                  </p>
                )}
              </div>
            </div>
            <div className='flex justify-center'>
              <button
                type='submit'
                className='text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </article>
      <img
        src='./src/assets/annie-spratt-hCb3lIB8L8E-unsplash.jpg'
        className='w-[30rem] -translate-x-32 opacity-90 bg object-cover shadow-md rounded-md'
        alt=''
      />
    </div>
  );
};

export default AddUserPage;
