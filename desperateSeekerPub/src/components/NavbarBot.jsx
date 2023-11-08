const NavbarBot = ({ filter, clickOnFilter }) => {
  return (
    <>
      <nav className='filter-bar p-2.5 flex gap-0.5 items-center justify-center'>
        <form>
          <div className='dropdown center'>
            <button
              type='button'
              className='rounded-r-none py-2.5 px-5 mt-1.5 -mr-1 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200'
            >
              Company
            </button>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52'
            >
              <div className='form-control'>
                <label className='label cursor-pointer'>
                  <input
                    value={1}
                    type='checkbox'
                    name='company'
                    className='checkbox border-gray-600'
                  />
                  <span className='label-text text-black'>Tokopedia</span>
                </label>
              </div>
              <div className='form-control'>
                <label className='label cursor-pointer'>
                  <input type='checkbox' className='checkbox border-gray-600' />
                  <span className='label-text text-black'>Gojek</span>
                </label>
              </div>
            </ul>
          </div>
          <div className='dropdown'>
            <button
              type='button'
              className='py-2.5 px-5 mr-0 mt-1.5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200'
            >
              Filter By
            </button>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52'
            >
              <div className='form-control'>
                <label className='label cursor-pointer'>
                  <input
                    type='radio'
                    name='filter'
                    value='title'
                    className='radio checked:bg-gray-500 border-gray-600'
                    defaultChecked=''
                  />
                  <span className='label-text text-black'>Title</span>
                </label>
              </div>
              <div className='form-control'>
                <label className='label cursor-pointer'>
                  <input
                    type='radio'
                    name='filter'
                    value='type'
                    className='radio checked:bg-gray-500 border-gray-600'
                    defaultChecked=''
                  />
                  <span className='label-text text-black'>Type</span>
                </label>
              </div>
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
                    name='radio-10'
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
                    name='radio-10'
                    className='radio checked:bg-gray-500 border-gray-600'
                  />
                  <span className='label-text text-black'>Descending</span>
                </label>
              </div>
            </ul>
          </div>
          <button
            type='submit'
            className='btn btn-sm ml-2 btn-ghost'
            onClick={clickOnFilter}
          >
            {filter ? 'Apply' : 'Reset'}
          </button>
        </form>
      </nav>
    </>
  );
};

export default NavbarBot;
