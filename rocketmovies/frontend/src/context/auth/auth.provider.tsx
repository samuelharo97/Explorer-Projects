import { ReactNode, useState } from 'react';
import { AuthContext } from './auth.context';
import { UserType } from 'types/user-props';
import { api } from '@service';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  const login = (email: string, password: string) => {
    const data = { email, password };
    api
      .post('/login', data)
      .then((res: any) => {
        setUser(res.data);

        console.log(auth, 'provider');
      })
      .then(() => setAuth(true))
      .catch((error: any) => alert(error.response.data.reason));
  };

  const logout = () => {
    console.log('logging out');
    // setAuth(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ auth, user, login, logout }}>{children}</AuthContext.Provider>
  );
};
