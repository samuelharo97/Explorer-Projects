import { SignIn } from '@pages';
import { createBrowserRouter } from 'react-router-dom';

export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
]);
