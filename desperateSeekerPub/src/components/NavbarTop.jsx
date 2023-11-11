import { useState } from 'react';
import { Link, Form } from 'react-router-dom';

const NavbarTop = () => {
  const [data, setData] = useState([
    {
      'id': 1,
      'name': 'Twimbo',
      'companyLogo': 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
      'location': 'Italy',
      'email': 'bliddicoat0@ftc.gov',
      'description':
        'With over 20 years of experience we have established ourselves as a trusted industry leader.',
    },
    {
      'id': 2,
      'name': 'Photojam',
      'companyLogo': 'http://dummyimage.com/100x100.png/dddddd/000000',
      'location': 'Indonesia',
      'email': 'bmcclinton1@infoseek.co.jp',
      'description':
        'We are a leading global company specializing in innovative technology solutions.',
    },
    {
      'id': 3,
      'name': 'Nlounge',
      'companyLogo': 'http://dummyimage.com/100x100.png/dddddd/000000',
      'location': 'Japan',
      'email': 'hkenwin2@artisteer.com',
      'description':
        'We pride ourselves on our commitment to excellence and continuous improvement.',
    },
    {
      'id': 4,
      'name': 'Yakitri',
      'companyLogo': 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
      'location': 'England',
      'email': 'snewiss3@globo.com',
      'description':
        'We pride ourselves on our commitment to excellence and continuous improvement.',
    },
    {
      'id': 5,
      'name': 'Gabcube',
      'companyLogo': 'http://dummyimage.com/100x100.png/ff4444/ffffff',
      'location': 'Germany',
      'email': 'chorrigan4@usa.gov',
      'description':
        'As a company we strive to make a positive impact on the world through our sustainable practices and philanthropic efforts.',
    },
    {
      'id': 6,
      'name': 'Quinu',
      'companyLogo': 'http://dummyimage.com/100x100.png/ff4444/ffffff',
      'location': 'Japan',
      'email': 'amaddison5@fc2.com',
      'description':
        'We pride ourselves on our commitment to excellence and continuous improvement.',
    },
    {
      'id': 7,
      'name': 'Blogspan',
      'companyLogo': 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
      'location': 'Italy',
      'email': 'ncauderlie6@statcounter.com',
      'description':
        'Our company is dedicated to providing high-quality products and exceptional customer service.',
    },
    {
      'id': 8,
      'name': 'Kwilith',
      'companyLogo': 'http://dummyimage.com/100x100.png/dddddd/000000',
      'location': 'Italy',
      'email': 'ghuchot7@hc360.com',
      'description':
        'Our company is dedicated to providing high-quality products and exceptional customer service.',
    },
    {
      'id': 9,
      'name': 'Gigazoom',
      'companyLogo': 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
      'location': 'Japan',
      'email': 'hlawleff8@360.cn',
      'description':
        'We pride ourselves on our commitment to excellence and continuous improvement.',
    },
    {
      'id': 10,
      'name': 'Abatz',
      'companyLogo': 'http://dummyimage.com/100x100.png/ff4444/ffffff',
      'location': 'France',
      'email': 'jaxton9@house.gov',
      'description':
        'We pride ourselves on our commitment to excellence and continuous improvement.',
    },
  ]);

  return (
    <>
      <nav className='nav-bar p-2.5 rounded-md flex flex-row justify-between items-center shadow-md bg-slate-200'>
        <Link to='/'>
          <h1 className='ml-5 text-xl font-semibold'>DesperateSeeker</h1>
        </Link>
        <Form id='parameter' name='parameter' action='/'>
          <input
            name='search'
            type='text'
            placeholder='Type here'
            className='w-80 mr-1 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-gray-500 focus:border-gray-500'
          />
          <div className='dropdown center'>
            <button
              type='button'
              className='rounded-r-none py-2.5 px-5 mt-1.5 -mr-1 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200'
            >
              Company
            </button>
            <ul
              tabIndex={0}
              className='grid grid-cols-3 gap-1 w-96 dropdown-content z-[1] menu p-2 shadow bg-white rounded-box'
            >
              {data.map((datum) => (
                <div className='flex w-6 gap-2 align-center'>
                  <input
                    name='filter'
                    value={datum.id}
                    type='checkbox'
                    className='checkbox border-gray-600 dont-send-class'
                  />
                  <span className='label-text text-black'>{datum.name}</span>
                </div>
              ))}
            </ul>
          </div>
          <div className='dropdown'>
            <button
              type='button'
              className='rounded-l-none mt-1.5 -ml-1 py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200'
            >
              Sort By
            </button>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52'
            >
              <div className='form-control'>
                <label className='label cursor-pointer'>
                  <input
                    type='radio'
                    name='sort'
                    value={'id'}
                    className='radio checked:bg-gray-500 border-gray-600'
                    defaultChecked=''
                  />
                  <span className='label-text text-black'>Ascending</span>
                </label>
              </div>
              <div className='form-control'>
                <label className='label cursor-pointer'>
                  <input
                    type='radio'
                    name='sort'
                    value={'-id'}
                    className='radio checked:bg-gray-500 border-gray-600'
                  />
                  <span className='label-text text-black'>Descending</span>
                </label>
              </div>
            </ul>
          </div>
          <button className='btn btn-sm ml-1 btn-ghost'>Search</button>
        </Form>
        <div className='side-nav flex flex-row gap-2'>
          <button className='btn btn-outline mr-5'>Login</button>
        </div>
      </nav>
    </>
  );
};

export default NavbarTop;
