import { InputText, Button } from '@components';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

export const SignIn = () => {
  return (
    <div className="flex h-screen">
      <section className="flex-col w-3/12 my-64 mx-auto">
        <div className="px-4 text-left">
          <h1 className="text-rose-400 font-bold pb-2">RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h3 className="my-12 text-2xl font-medium">Faça seu login</h3>
        </div>

        <InputText placeholder="E-mail" icon={AiOutlineMail} inputType="email"></InputText>

        <InputText placeholder="Senha" inputType="password" icon={AiOutlineLock}></InputText>

        <Button text="Entrar" onClick={() => console.log('clicked')} color="bg-rose-400"></Button>
      </section>
      <section className="h-screen w-7/12">
        <img className="opacity-30 h-screen w-full" src="src/assets/stairs.png" alt="movie theater" />
      </section>
    </div>
  );
};
