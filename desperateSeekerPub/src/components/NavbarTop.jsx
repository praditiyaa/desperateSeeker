const NavbarTop = () => {
  return (
    <>
      <nav className='nav-bar p-2.5 rounded-md flex flex-row justify-between items-center shadow-md bg-slate-200'>
        <a href=''>
          <h1 className='ml-5 text-xl font-semibold'>DesperateSeeker</h1>
        </a>
        <div className='search join flex flex-row gap-1'>
          <input
            type='text'
            placeholder='Type here'
            className='input join-item input-bordered w-full max-w-xs bg-transparent'
          />
          <button className='btn join-item btn-outline'>Search</button>
        </div>
        <div className='side-nav flex flex-row gap-2'>
          <button className='btn btn-outline mr-5'>Login</button>
        </div>
      </nav>
    </>
  );
};

export default NavbarTop;
