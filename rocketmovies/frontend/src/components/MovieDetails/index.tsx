import { LinkText, Stars } from '@components';
import { AuthContext } from '@context';
import { api } from '@service';
import { MovieProps, UserProps } from '@types';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineClockCircle } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

export const MovieDetails: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState<MovieProps>();
  const { id } = useParams();

  useEffect(() => {
    api.get(`movie/${id}`).then((res) => setData(res.data));
  }, []);

  return (
    <main className="px-32 py-10 h-4/5">
      <div className="flex justify-left items-center">
        <AiOutlineArrowLeft className="text-rose-400 h-10 p-2 rounded-lg w-max outline-none mb-5 hover:cursor-pointer" />
        <LinkText goTo={'/'} text="Voltar" />
      </div>
      <div className="overflow-hidden overflow-y-scroll h-full">
        <section className="flex flex-col justify-start gap-10 mb-10">
          <div className="flex gap-8">
            <h3 className="text-4xl font-semibold">{data?.title}</h3>
            <Stars size={'4xl'} initialRating={data?.rating} />
          </div>
          <div className="flex gap-5 items-center">
            <img src={user?.avatar} alt="user's avatar" className="rounded-full h-7 w-7" />
            <p className="text-lg">{`Por ${user?.name}`}</p>
            <AiOutlineClockCircle className="h-7 w-7 fill-rose-400" />
            <span className="text-lg">{`${user?.date} às ${user?.time}`}</span>
          </div>
          {data?.tags.length ? (
            <div className="flex gap-5 mt-3">
              {data?.tags.map((tag) => {
                return (
                  <p className="bg-neutral-700 py-1 px-2 rounded-xl hover:bg-neutral-600 hover:cursor-pointer">
                    {tag}
                  </p>
                );
              })}
            </div>
          ) : null}
        </section>
        <article>{data?.content}</article>
      </div>
    </main>
  );
};
