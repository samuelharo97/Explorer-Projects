import { ReactNode, useState } from 'react';
import { AuthContext } from './auth.context';
import { UserType } from 'types/user-props';
import { api } from '@service';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState<UserType | null>(null);

  const login = async (email: string, password: string) => {
    const data = { email, password };
    await api
      .post('/login', data)
      .then((res: any) => {
        setUser(res.data);
      })
      .catch((error: any) => alert(error.response.data.reason));

    await api.get(`/movie/${user?.user.id_user}`).then((res) => setMovies(res.data));

    setAuth(true);
  };

  const logout = () => {
    console.log('logging out');
    setAuth(false);
    setUser(null);
    setMovies([]);
  };

  return (
    <AuthContext.Provider value={{ auth, user, login, logout, movies }}>
      {children}
    </AuthContext.Provider>
  );
};
