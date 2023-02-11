import { Stars } from '@components';
import { MovieProps } from '@types';

export const MovieCard: React.FC<MovieProps> = ({ data }) => {
  return (
    <article className="movie-box flex-col px-8 py-4 max-h-64 gap-3 rounded-2xl">
      <h4 className="text-2xl font-bold">{data.title}</h4>
      <Stars initialRating={data.rating} />
      <div className="truncate-text h-40">
        <p className="text-neutral-500">{data.content}</p>
      </div>
      {data.tags.length > 0 ? (
        <div className="flex gap-5 mt-3 ml-2">
          {data.tags.map((tag) => {
            return (
              <p className="bg-neutral-700 py-1 px-2 rounded-xl hover:bg-neutral-600 hover:cursor-pointer">
                {tag}
              </p>
            );
          })}
        </div>
      ) : null}
    </article>
  );
};
