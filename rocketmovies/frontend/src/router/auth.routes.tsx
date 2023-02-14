import { SignIn, SignUp } from '@pages';
import { createBrowserRouter } from 'react-router-dom';

export const AuthRoutes = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/register',
    element: <SignUp />,
  },
]);
