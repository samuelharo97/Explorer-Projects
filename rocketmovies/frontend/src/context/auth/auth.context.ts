import { createContext } from 'react';

export type AuthContextType = any;

export const AuthContext = createContext<AuthContextType>(false);

