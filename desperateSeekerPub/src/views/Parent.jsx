import { Outlet } from 'react-router-dom';
import NavbarTop from '../components/NavbarTop';

const Parent = () => {
  return (
    <>
      <NavbarTop />
      <Outlet />
    </>
  );
};

export default Parent;
