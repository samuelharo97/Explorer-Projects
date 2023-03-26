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
    try {
      const { data: user } = await api.post('/login', { email, password });
      const { data: movies } = await api.get(`/movie/${user.id_user}`);
      setMovies(movies);
      setAuth(true);
    } catch (error) {
      console.error(error);
      alert('Error during login process. Please try again.');
    }
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
