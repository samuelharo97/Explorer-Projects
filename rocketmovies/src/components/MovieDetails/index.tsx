import { LinkText, Stars } from '@components';
import { MovieProps, UserProps } from '@types';
import { AiOutlineArrowLeft, AiOutlineClockCircle } from 'react-icons/ai';

type Props = MovieProps & UserProps;

export const MovieDetails: React.FC<Props> = ({ data, user }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <AiOutlineArrowLeft className="text-rose-400 h-10 p-2 rounded-lg w-max outline-none mb-5 hover:cursor-pointer" />
        <LinkText goTo={'/'} text="Voltar" />
      </div>
      <div className="overflow-scroll scrollbar-rose-400 bg-transparent">
        <div className="flex">
          <h3>{data.title}</h3>
          <Stars initialRating={data.rating} />
        </div>
        <div className="flex">
          <p>{`Por ${user.name}`}</p>
          <AiOutlineClockCircle />
          <span>{`${user.date} às ${user.time}`}</span>
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
        <article>{data.content}</article>
      </div>
    </>
  );
};
