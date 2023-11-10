import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Parent from '../views/Parent';
import HomePage from '../views/HomePage';
import DetailPage from '../views/DetailPage';

const router = createBrowserRouter([
  {
    element: <Parent />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/detail/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
