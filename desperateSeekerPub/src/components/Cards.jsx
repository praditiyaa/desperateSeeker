const Cards = ({ jobType, title, desc, img, comName, clickOnDetail }) => {
  return (
    <>
      <div className='flex w-[40rem] h-fit flex-row rounded-xl bg-white bg-clip-border hover:shadow-xl text-gray-700 shadow-md'>
        <div className='relative w-64 h-64 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border'>
          <img src={img} alt='image' className='object-cover w-full h-full' />
        </div>
        <div className='p-6 grid gap-2'>
          <h6 className=' text-base font-semibold leading-relaxed text-gray-500 uppercase'>
            {jobType}
          </h6>
          <h4 className=' text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
            {title}
          </h4>
          <p className=' text-base antialiased font-semibold leading-relaxed text-gray-700'>
            {comName}
          </p>
          <p className=' text-base antialiased font-normal leading-relaxed text-gray-700'>
            {desc}
          </p>
          <a className='inline-block'>
            <button
              className='flex items-center gap-2 px-6 py-3  text-xs font-bold text-center text-gray-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-500/10 active:bg-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
              onClick={clickOnDetail}
            >
              Learn More
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                aria-hidden='true'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
