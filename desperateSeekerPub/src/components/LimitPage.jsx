const LimitPage = () => {
  return (
    <>
      <div className='limit flex items-center ml-20 gap-2'>
        <p>Jobs Per Page</p>
        <div className='join'>
          <button className='join-item btn-sm hover:bg-gray-200 bg-transparent'>
            10
          </button>
          <button className='join-item btn-sm hover:bg-gray-200 bg-transparent'>
            15
          </button>
          <button className='join-item btn-sm hover:bg-gray-200 bg-transparent'>
            20
          </button>
        </div>
      </div>
    </>
  );
};

export default LimitPage;
