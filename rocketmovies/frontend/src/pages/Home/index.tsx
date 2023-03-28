import { Header, MovieCard } from '@components';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { AuthContext } from '@context';
import { useContext } from 'react';

export const Home = () => {
  const { movies } = useContext(AuthContext);

  return (
    <>
      <Header />
      <main className="px-28 py-8 h-4/5">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-medium">Meus filmes</h3>
          <Link
            className="flex w-52 h-12 text-black bg-rose-400 rounded-lg items-center justify-center gap-2 hover:text-gray-800 hover:bg-rose-300"
            to={'/new'}
          >
            <AiOutlinePlus className="h-6 w-6" />
            Adicionar filme
          </Link>
        </div>
        <ul className="scrollbar flex flex-col justify-start align-middle gap-6 overflow-hidden overflow-y-scroll h-full">
          {movies.map((movie) => (
            <MovieCard key={movie.data.id} data={movie.data} />
          ))}
        </ul>
      </main>
    </>
  );
};
