import { Link } from 'react-router-dom';

const Pagination = ({
  KeyboardArrowLeft,
  KeyboardArrowRight,
  pages,
  setParams,
}) => {
  const arr = [];
  for (let i = 0; i < pages; i++) arr.push(i + 1);

  const params = window.location.search;
  setParams(params);
  return (
    <>
      <div className='pagination mr-20'>
        <div className='join'>
          <button className='join-item mr-1 btn-sm hover:bg-gray-200 text-sm w-fit bg-transparent'>
            <KeyboardArrowLeft />
          </button>
          {arr.map((num) => (
            <Link
              to={
                params && !params.includes('page')
                  ? params + `&page=${num}`
                  : params.includes('&page=')
                  ? params.replace(/&page=[0-9]+/, `&page=${num}`)
                  : `?page=${num}`
              }
            >
              <button className='join-item btn-sm w-8 hover:bg-gray-200 bg-transparent'>
                {num}
              </button>
            </Link>
          ))}
          <button className='join-item ml-1 btn-sm hover:bg-gray-200 text-sm w-fit bg-transparent'>
            <KeyboardArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
