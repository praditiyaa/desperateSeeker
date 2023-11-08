const Pagination = ({ KeyboardArrowLeft, KeyboardArrowRight, pages }) => {
  const arr = [];
  for (let i = 0; i < pages; i++) arr.push(i + 1);
  return (
    <>
      <div className='pagination mr-20'>
        <div className='join'>
          <button className='join-item mr-1 btn-sm hover:bg-gray-200 text-sm w-fit bg-transparent'>
            <KeyboardArrowLeft />
          </button>
          {arr.map((num) => (
            <button className='join-item btn-sm w-8 hover:bg-gray-200 bg-transparent'>
              {num}
            </button>
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
