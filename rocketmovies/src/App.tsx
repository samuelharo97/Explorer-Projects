import { RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { AuthRoutes, AppRoutes } from '@router';
import { useState } from 'react';
import { AuthContext, AuthContextType } from '@context';

function App() {
  const [auth, setAuth] = useState<AuthContextType>(false);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      <RouterProvider router={auth ? AppRoutes : AuthRoutes} />
    </AuthContext.Provider>
  );
}

export default App;
