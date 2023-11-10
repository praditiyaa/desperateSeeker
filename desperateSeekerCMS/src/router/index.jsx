import { createBrowserRouter } from 'react-router-dom';
import AddUserPage from '../views/AddUserPage';
import ComPage from '../views/CompaniesPage';
import LoginPage from '../views/LoginPage';
import JobPage from '../views/JobPage';
import Parent from '../views/Parent';
import Form from '../views/AddFormPage';

const router = createBrowserRouter([
  {
    element: <Parent />,
    children: [
      {
        element: <LoginPage />,
        path: '/',
      },
      {
        element: <JobPage />,
        path: '/jobs',
      },
      {
        element: <ComPage />,
        path: '/companies',
      },
      {
        element: <AddUserPage />,
        path: '/register',
      },
    ],
  },
]);

export default router;
