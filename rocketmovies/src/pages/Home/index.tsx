import { Header, MovieCard } from '@components';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

const data = {
  title: 'Interstellar',
  rating: 3,
  content: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
  `,
  tags: ['Sci-fi', 'Excellent'],
};

export const Home = () => {
  return (
    <>
      <Header />
      <main className="px-28 py-8 h-4/5">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-medium">Meus filmes</h3>
          <Link
            className="flex w-52 h-12 text-black bg-rose-400 rounded-lg items-center justify-center gap-2 hover:text-gray-800 hover:bg-rose-300"
            to={'/movies/new'}
          >
            <AiOutlinePlus className="h-6 w-6" />
            Adicionar filme
          </Link>
        </div>
        <section className="scrollbar flex flex-col justify-center items-center gap-6 overflow-hidden overflow-y-scroll h-full">
          <MovieCard data={data}></MovieCard>
          <MovieCard data={data}></MovieCard>
          <MovieCard data={data}></MovieCard>
          <MovieCard data={data}></MovieCard>
          <MovieCard data={data}></MovieCard>
          <MovieCard data={data}></MovieCard>
          <MovieCard data={data}></MovieCard>
          <MovieCard data={data}></MovieCard>
          <MovieCard data={data}></MovieCard>
          <MovieCard data={data}></MovieCard>
          <MovieCard data={data}></MovieCard>
        </section>
      </main>
    </>
  );
};
