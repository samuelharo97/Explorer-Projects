import { Header, MovieDetails } from '@components';
import { AuthContext } from '@context';
import { useContext } from 'react';

export const Details = () => {
  const { movies, user } = useContext(AuthContext);
  return (
    <>
      <Header />
      <MovieDetails />
    </>
  );
};
