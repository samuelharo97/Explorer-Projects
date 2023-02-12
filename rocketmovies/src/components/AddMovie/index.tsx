import { LinkText } from '@components';
import { useRef, useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

export const AddMovie = () => {
  const [tags, setTags] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const enterPress = (event: any) => {
    if (event.key === 'Enter') {
      addTag(inputRef.current?.value);
    }
  };

  const addTag = (tag: string | undefined) => {
    if (!tag) {
      alert('Tag cannot be empty');
      throw Error('tag cant be null');
    }
    setTags([...tags, tag]);
  };

  useEffect(() => {
    console.log('hey');
    if (inputRef.current?.value) {
      inputRef.current.value = '';
    }
  }, [tags]);

  return (
    <main className="flex flex-col px-28 py-1 h-4/5">
      <div className="flex justify-between ">
        <div className="flex items-center">
          <AiOutlineArrowLeft className="text-rose-400 h-10 rounded-lg w-max outline-none mb-4 hover:cursor-pointer" />
          <LinkText goTo={'/'} text="Voltar" />
        </div>
        <div></div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-4xl font-medium">Novo filme</h3>
      </div>
      <section className="flex flex-col gap-10">
        <div className="flex gap-10">
          <input type="text" className="w-6/12 h-14 rounded-lg pl-4" placeholder="Título" />
          <input
            type="number"
            className="w-6/12 h-14 rounded-lg pl-4"
            max={5}
            min={0}
            placeholder="Sua nota (de 0 a 5)"
          />
        </div>
        <div>
          <textarea
            name="observations"
            placeholder="Observações"
            className="w-full rounded-lg px-6 py-4 h-44"
          ></textarea>
        </div>
        <label htmlFor="tags" className="text-gray-300 text-xl pl-3">
          Marcadores
        </label>
        <div className="bg-black w-full h-20 rounded-lg flex items-center align-middle gap-5 p-4 overflow-hidden overflow-y-scroll">
          {tags.length > 0
            ? tags.map((tag, i) => {
                return (
                  <div key={i} className="addTag h-14 w-fit px-5 rounded-lg">
                    <span className="flex w-full h-full relative inset-y-0 items-center justify-center align-middle">
                      {tag}
                      <AiOutlineClose
                        id={String(i)}
                        className="hover:cursor-pointer fill-rose-400 w-5 h-5 ml-3"
                      />
                    </span>
                  </div>
                );
              })
            : null}
          <div className="flex justify-center items-center w-44 h-full align-middle rounded-lg border-2 border-dashed px-7 border-gray-400">
            <input
              ref={inputRef}
              onKeyDown={enterPress}
              className="bg-transparent relative w-36 pl-4 focus:bg-transparent text-gray-400 focus:outline-none"
              type="text"
              placeholder="Novo marcador"
            />
            <span className="relative inset-y-0">
              <AiOutlinePlus
                onClick={() => addTag(inputRef.current?.value)}
                className="hover:cursor-pointer fill-rose-400 w-5 h-5 mr-2"
              ></AiOutlinePlus>
            </span>
          </div>
        </div>
        <div className="flex gap-10">
          <button className="bg-black text-rose-400 rounded-lg h-14 w-6/12">Excluir filme</button>
          <button className="bg-rose-400 text-black rounded-lg h-14 w-6/12">
            Salvar alterações
          </button>
        </div>
      </section>
    </main>
  );
};
