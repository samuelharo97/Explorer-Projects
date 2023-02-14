import { Stars, Tag } from '@components';
import { MovieProps } from '@types';
import { useNavigate } from 'react-router-dom';

export const MovieCard: React.FC<MovieProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/movies/${data.id}`);
  };

  return (
    <article className="movie-box flex-col px-8 py-8 max-h-64 gap-3 rounded-2xl">
      <h4 className="text-2xl font-bold">{data.title}</h4>
      <Stars size={'xl'} initialRating={data.rating} />
      <div className="truncate-text h-40">
        <p className="text-neutral-500 hover:cursor-pointer" onClick={() => handleNavigate()}>
          {data.content}
        </p>
      </div>
      {data.tags.length > 0 ? (
        <div className="flex gap-5 mt-3 ml-2">
          {data.tags.map((tag, i) => {
            return <Tag key={i} name={tag}></Tag>;
          })}
        </div>
      ) : null}
    </article>
  );
};
