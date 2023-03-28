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
      const { data: userData } = await api.post('/login', { email, password });
      const { data: moviesData } = await api.get(`/movie/${userData.id_user}`);
      setUser(userData)
      setMovies(moviesData);
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
