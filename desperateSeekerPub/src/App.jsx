import { useState } from 'react';
import './App.css';
import NavbarTop from './components/NavbarTop.jsx';
import NavbarBot from './components/NavbarBot.jsx';
import Pagination from './components/Pagination.jsx';
import Cards from './components/Cards.jsx';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';
import LimitPage from './components/LimitPage.jsx';
import JobDet from './components/JobDet.jsx';

// Functional Component
function App() {
  // index 0 => state name (variable name) => read only (immutable)
  // index 1 => a function to toggle the state => usually using state
  const [alreadyLog, setAlreadyLog] = useState(false); // => conditional rendering (showin and hide based on condition)
  const [showDetail, setShowDetail] = useState(false);
  const [filter, setFiltered] = useState(true);
  const [inputData, setInputData] = useState([
    {
      'message': 'Jobs Found',
      'result': {
        'total': 25,
        'size': 10,
        'totalPage': 3,
        'data': [
          {
            'id': 1,
            'title': 'Senior Editor',
            'description': 'Research and Development',
            'imgURL': 'http://dummyimage.com/250x250.png/cc0000/ffffff',
            'jobType': 'Part Time',
            'companyId': 2,
            'authorId': 2,
            'createdAt': '2023-11-02T09:24:18.113Z',
            'updatedAt': '2023-11-02T09:24:18.113Z',
            'Company': {
              'id': 2,
              'name': 'Photojam',
              'companyLogo': 'http://dummyimage.com/100x100.png/dddddd/000000',
              'location': 'Indonesia',
              'email': 'bmcclinton1@infoseek.co.jp',
              'description':
                'We are a leading global company specializing in innovative technology solutions.',
              'createdAt': '2023-11-02T09:24:18.106Z',
              'updatedAt': '2023-11-02T09:24:18.106Z',
            },
          },
          {
            'id': 2,
            'title': 'Marketing Manager',
            'description': 'Business Development',
            'imgURL':
              'https://ik.imagekit.io/z46txdqhe/annie-spratt-MASFMQGq62k-unsplash_lbH6grVEe.jpg',
            'jobType': 'Full Time',
            'companyId': 5,
            'authorId': 2,
            'createdAt': '2023-11-02T09:24:18.113Z',
            'updatedAt': '2023-11-03T02:56:05.922Z',
            'Company': {
              'id': 5,
              'name': 'Gabcube',
              'companyLogo': 'http://dummyimage.com/100x100.png/ff4444/ffffff',
              'location': 'Germany',
              'email': 'chorrigan4@usa.gov',
              'description':
                'As a company we strive to make a positive impact on the world through our sustainable practices and philanthropic efforts.',
              'createdAt': '2023-11-02T09:24:18.106Z',
              'updatedAt': '2023-11-02T09:24:18.106Z',
            },
          },
          {
            'id': 3,
            'title': 'VP Marketing',
            'description': 'Support',
            'imgURL':
              'https://ik.imagekit.io/z46txdqhe/annie-spratt-MASFMQGq62k-unsplash_BBT6vxfAa.jpg',
            'jobType': 'Full Time',
            'companyId': 5,
            'authorId': 2,
            'createdAt': '2023-11-02T09:24:18.113Z',
            'updatedAt': '2023-11-03T04:13:04.561Z',
            'Company': {
              'id': 5,
              'name': 'Gabcube',
              'companyLogo': 'http://dummyimage.com/100x100.png/ff4444/ffffff',
              'location': 'Germany',
              'email': 'chorrigan4@usa.gov',
              'description':
                'As a company we strive to make a positive impact on the world through our sustainable practices and philanthropic efforts.',
              'createdAt': '2023-11-02T09:24:18.106Z',
              'updatedAt': '2023-11-02T09:24:18.106Z',
            },
          },
          {
            'id': 4,
            'title': 'Senior Cost Accountant',
            'description': 'Marketing',
            'imgURL': 'http://dummyimage.com/250x250.png/dddddd/000000',
            'jobType': 'Part Time',
            'companyId': 5,
            'authorId': 2,
            'createdAt': '2023-11-02T09:24:18.113Z',
            'updatedAt': '2023-11-02T09:24:18.113Z',
            'Company': {
              'id': 5,
              'name': 'Gabcube',
              'companyLogo': 'http://dummyimage.com/100x100.png/ff4444/ffffff',
              'location': 'Germany',
              'email': 'chorrigan4@usa.gov',
              'description':
                'As a company we strive to make a positive impact on the world through our sustainable practices and philanthropic efforts.',
              'createdAt': '2023-11-02T09:24:18.106Z',
              'updatedAt': '2023-11-02T09:24:18.106Z',
            },
          },
          {
            'id': 5,
            'title': 'General Manager',
            'description': 'Engineering',
            'imgURL': 'http://dummyimage.com/250x250.png/ff4444/ffffff',
            'jobType': 'Full Time',
            'companyId': 4,
            'authorId': 1,
            'createdAt': '2023-11-02T09:24:18.113Z',
            'updatedAt': '2023-11-02T09:24:18.113Z',
            'Company': {
              'id': 4,
              'name': 'Yakitri',
              'companyLogo': 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
              'location': 'England',
              'email': 'snewiss3@globo.com',
              'description':
                'We pride ourselves on our commitment to excellence and continuous improvement.',
              'createdAt': '2023-11-02T09:24:18.106Z',
              'updatedAt': '2023-11-02T09:24:18.106Z',
            },
          },
          {
            'id': 6,
            'title': 'Account Executive',
            'description': 'Business Development',
            'imgURL': 'http://dummyimage.com/250x250.png/dddddd/000000',
            'jobType': 'Part Time',
            'companyId': 5,
            'authorId': 2,
            'createdAt': '2023-11-02T09:24:18.113Z',
            'updatedAt': '2023-11-02T09:24:18.113Z',
            'Company': {
              'id': 5,
              'name': 'Gabcube',
              'companyLogo': 'http://dummyimage.com/100x100.png/ff4444/ffffff',
              'location': 'Germany',
              'email': 'chorrigan4@usa.gov',
              'description':
                'As a company we strive to make a positive impact on the world through our sustainable practices and philanthropic efforts.',
              'createdAt': '2023-11-02T09:24:18.106Z',
              'updatedAt': '2023-11-02T09:24:18.106Z',
            },
          },
          {
            'id': 7,
            'title': 'Research Assistant III',
            'description': 'Training',
            'imgURL': 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
            'jobType': 'Full Time',
            'companyId': 3,
            'authorId': 2,
            'createdAt': '2023-11-02T09:24:18.113Z',
            'updatedAt': '2023-11-02T09:24:18.113Z',
            'Company': {
              'id': 3,
              'name': 'Nlounge',
              'companyLogo': 'http://dummyimage.com/100x100.png/dddddd/000000',
              'location': 'Japan',
              'email': 'hkenwin2@artisteer.com',
              'description':
                'We pride ourselves on our commitment to excellence and continuous improvement.',
              'createdAt': '2023-11-02T09:24:18.106Z',
              'updatedAt': '2023-11-02T09:24:18.106Z',
            },
          },
          {
            'id': 8,
            'title': 'Senior Developer',
            'description': 'Accounting',
            'imgURL': 'http://dummyimage.com/250x250.png/ff4444/ffffff',
            'jobType': 'Part Time',
            'companyId': 5,
            'authorId': 1,
            'createdAt': '2023-11-02T09:24:18.113Z',
            'updatedAt': '2023-11-02T09:24:18.113Z',
            'Company': {
              'id': 5,
              'name': 'Gabcube',
              'companyLogo': 'http://dummyimage.com/100x100.png/ff4444/ffffff',
              'location': 'Germany',
              'email': 'chorrigan4@usa.gov',
              'description':
                'As a company we strive to make a positive impact on the world through our sustainable practices and philanthropic efforts.',
              'createdAt': '2023-11-02T09:24:18.106Z',
              'updatedAt': '2023-11-02T09:24:18.106Z',
            },
          },
          {
            'id': 9,
            'title': 'Account Coordinator',
            'description': 'Sales',
            'imgURL': 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
            'jobType': 'Full Time',
            'companyId': 2,
            'authorId': 1,
            'createdAt': '2023-11-02T09:24:18.113Z',
            'updatedAt': '2023-11-02T09:24:18.113Z',
            'Company': {
              'id': 2,
              'name': 'Photojam',
              'companyLogo': 'http://dummyimage.com/100x100.png/dddddd/000000',
              'location': 'Indonesia',
              'email': 'bmcclinton1@infoseek.co.jp',
              'description':
                'We are a leading global company specializing in innovative technology solutions.',
              'createdAt': '2023-11-02T09:24:18.106Z',
              'updatedAt': '2023-11-02T09:24:18.106Z',
            },
          },
          {
            'id': 10,
            'title': 'General Manager',
            'description': 'Human Resources',
            'imgURL': 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
            'jobType': 'Full Time',
            'companyId': 2,
            'authorId': 2,
            'createdAt': '2023-11-02T09:24:18.113Z',
            'updatedAt': '2023-11-02T09:24:18.113Z',
            'Company': {
              'id': 2,
              'name': 'Photojam',
              'companyLogo': 'http://dummyimage.com/100x100.png/dddddd/000000',
              'location': 'Indonesia',
              'email': 'bmcclinton1@infoseek.co.jp',
              'description':
                'We are a leading global company specializing in innovative technology solutions.',
              'createdAt': '2023-11-02T09:24:18.106Z',
              'updatedAt': '2023-11-02T09:24:18.106Z',
            },
          },
        ],
      },
    },
  ]);

  const [oneData, setOneData] = useState({
    'message': 'Job with id 1 Found',
    'data': {
      'id': 1,
      'title': 'Senior Editor',
      'description': 'Research and Development',
      'imgURL': 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      'jobType': 'Part Time',
      'companyId': 2,
      'authorId': 2,
      'createdAt': '2023-11-02T09:24:18.113Z',
      'updatedAt': '2023-11-02T09:24:18.113Z',
      'Company': {
        'id': 2,
        'name': 'Photojam',
        'companyLogo': 'http://dummyimage.com/100x100.png/dddddd/000000',
        'location': 'Indonesia',
        'email': 'bmcclinton1@infoseek.co.jp',
        'description':
          'We are a leading global company specializing in innovative technology solutions.',
        'createdAt': '2023-11-02T09:24:18.106Z',
        'updatedAt': '2023-11-02T09:24:18.106Z',
      },
    },
  });

  // function event handler
  const buttonLogOnClick = () => {
    if (alreadyLog) {
      setAlreadyLog(false);
    } else {
      setAlreadyLog(true);
    }
  };

  const displayDetail = () => {
    if (!showDetail) {
      setShowDetail(true);
    } else {
      setShowDetail(false);
    }
  };

  const inputNameOnChange = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };

  const clickOnFilter = () => {
    if (filter) {
      setFiltered(false);
    } else {
      setFiltered(true);
    }
  };

  const buttonSubmit = (event) => {
    const testId = inputData;
    console.log(inputData);
  };

  return (
    // Element that we want to render
    // Fragment => to hold without root and div
    <div className='h-screen bg-slate-100'>
      <NavbarTop />
      {!showDetail && (
        <>
          <NavbarBot filter={filter} clickOnFilter={clickOnFilter} />
          <main className='flex justify-center overflow-auto items-center'>
            <article className='card-container h-[72vh] grid grid-cols-2 gap-5 justify-center'>
              {inputData[0].result.data.map((datum) => (
                <Cards
                  img={datum.imgURL}
                  jobType={datum.jobType}
                  title={datum.title}
                  desc={datum.description}
                  comName={datum.Company.name}
                  displayDetail={displayDetail}
                />
              ))}
            </article>
          </main>
          <footer className='flex absolute inset-x-0 bottom-0 mb-10 justify-between'>
            <LimitPage />
            <Pagination
              pages={inputData[0].result.totalPage}
              KeyboardArrowLeft={KeyboardArrowLeft}
              KeyboardArrowRight={KeyboardArrowRight}
            />
          </footer>
        </>
      )}
      {showDetail && (
        <JobDet
          img={oneData.data.imgURL}
          title={oneData.data.title}
          desc={oneData.data.description}
          jobType={oneData.data.jobType}
          comName={oneData.data.Company.name}
          location={oneData.data.Company.location}
          email={oneData.data.Company.email}
          imgLogo={oneData.data.Company.companyLogo}
        />
      )}
    </div>
  );
}

export default App;
