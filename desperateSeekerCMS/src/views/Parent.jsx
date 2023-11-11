import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Parent = () => {
  const [log, setLog] = useState(false);

  return (
    <>
      <Navbar log={log} setLog={setLog} />
      <Outlet context={[log, setLog]} />
    </>
  );
};

export default Parent;
