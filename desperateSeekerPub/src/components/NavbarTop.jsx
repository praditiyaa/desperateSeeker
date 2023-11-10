import { Link } from 'react-router-dom';

const NavbarTop = () => {
  return (
    <>
      <nav className='nav-bar p-2.5 rounded-md flex flex-row justify-between items-center shadow-md bg-slate-200'>
        <Link to='/'>
          <h1 className='ml-5 text-xl font-semibold'>DesperateSeeker</h1>
        </Link>
        <div className='side-nav flex flex-row gap-2'>
          <button className='btn btn-outline mr-5'>Login</button>
        </div>
      </nav>
    </>
  );
};

export default NavbarTop;
