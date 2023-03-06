import { RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { AuthRoutes, AppRoutes } from '@router';
import { AuthContext, AuthProvider } from '@context';
import { useContext } from 'react';

function App() {
  const context = useContext(AuthContext);

  // setInterval(() => {
  //   console.log(context, 'use effect');
  // }, 5000);

  return <RouterProvider router={context.auth ? AppRoutes : AuthRoutes} />;
}

export default App;
