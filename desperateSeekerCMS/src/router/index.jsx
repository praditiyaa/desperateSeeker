import { createBrowserRouter, redirect } from 'react-router-dom';
import AddUserPage from '../views/AddUserPage';
import ComPage from '../views/CompaniesPage';
import LoginPage from '../views/LoginPage';
import JobPage from '../views/JobPage';
import Parent from '../views/Parent';

const router = createBrowserRouter([
  {
    element: <Parent />,
    children: [
      {
        element: <LoginPage />,
        path: '/',
      },
    ],
    loader: async () => {
      if (localStorage.token) {
        return redirect('/jobs');
      }

      return null;
    },
  },
  {
    element: <Parent />,
    children: [
      {
        element: <JobPage />,
        path: '/jobs',
        children: [
          {
            element: <JobPage />,
            path: ':jobId',
          },
        ],
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
    loader: async () => {
      if (!localStorage.token) {
        return redirect('/');
      }

      return null;
    },
  },
]);

export default router;
