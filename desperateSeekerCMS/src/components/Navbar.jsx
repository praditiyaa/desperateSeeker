import { Link } from 'react-router-dom';

const Navbar = ({ log, setLog }) => {
  const logout = () => {
    setLog(false);
  };

  return (
    <nav className='nav-bar p-2.5 h-16 flex flex-row justify-between items-center bg-slate-200 shadow-md'>
      <Link to='/jobs'>
        <h1 className='ml-5 text-xl font-semibold w-56 hover:text-gray-600 text-gray-500'>
          DesperateSeeker
        </h1>
      </Link>
      {log && (
        <div className='flex gap-5'>
          <Link to='/jobs'>
            <p className='text-lg font-medium hover:text-gray-600 text-gray-500'>
              Jobs
            </p>
          </Link>
          <p className='text-lg font-medium pointer-events-none'>/</p>
          <Link to='/companies'>
            <p className='text-lg font-medium hover:text-gray-600 text-gray-500'>
              Companies
            </p>
          </Link>
          <p className='text-lg font-medium pointer-events-none'>/</p>
          <Link to='/register'>
            <p className='text-lg font-medium hover:text-gray-600 text-gray-500'>
              Add-User
            </p>
          </Link>
        </div>
      )}

      <div className='side-nav w-56 flex justify-end'>
        {log && (
          <Link to={'/'}>
            <button
              onClick={logout}
              className='mr-5 btn btn-outline text-gray-500'
            >
              Logout
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
