import { CreateMovie, Home, Profile, Details } from '@pages';
import { createBrowserRouter } from 'react-router-dom';

const user = {
  name: 'Samuel Haro',
  avatar: 'https://avatars.githubusercontent.com/u/103484037?v=4',
  email: 'samuel.hm@hotmail.com',
  date: new Date().toLocaleDateString('pt-BR'),
  time: new Date().toLocaleTimeString('pt-BR').slice(0, 5),
};

export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile user={user} />,
  },
  {
    path: '/new',
    element: <CreateMovie />,
  },
  {
    path: '/movies/:id', //details
    element: <Details />,
  },
]);