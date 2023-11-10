import { Link } from 'react-router-dom';

const LimitPage = ({ setParams }) => {
  const params = window.location.search;
  setParams(params);

  const getUrl = (val) => {
    return params && !params.includes('limit')
      ? params + `&limit=${val}`
      : params.includes(`&limit`)
      ? params.replace(/&limit=[0-9]+/, `&limit=${val}`)
      : `?limit=${val}`;
  };

  return (
    <>
      <div className='limit flex items-center ml-20 gap-2'>
        <p>Jobs Per Page</p>
        <div className='join'>
          <Link to={getUrl(10)}>
            <button
              value={10}
              className='join-item btn-sm hover:bg-gray-200 bg-transparent'
            >
              10
            </button>
          </Link>
          <Link to={getUrl(15)}>
            <button className='join-item btn-sm hover:bg-gray-200 bg-transparent'>
              15
            </button>
          </Link>
          <Link to={getUrl(20)}>
            <button className='join-item btn-sm hover:bg-gray-200 bg-transparent'>
              20
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LimitPage;
