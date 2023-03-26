import { MovieProps } from '@types';
import React from 'react';
import { UserType } from 'types/user-props';

export interface AuthContextType {
  user: UserType | null;
  movies: MovieProps[] | [];
  auth: boolean;
  logout: () => void;
  login: (email: string, password: string) => void;
}

export const AuthContext = React.createContext<AuthContextType>({
  auth: false,
  user: null,
  movies: [],
  login() {},
  logout() {},
});
