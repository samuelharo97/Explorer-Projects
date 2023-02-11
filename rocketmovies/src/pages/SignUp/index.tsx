import { LandingLogo, InputText, Button, LinkText } from '@components';
import { AuthContext } from '@context';
import { useContext } from 'react';
import { AiOutlineMail, AiOutlineLock, AiOutlineUser, AiOutlineArrowLeft } from 'react-icons/ai';

export const SignUp = () => {

  return (
    <div className="flex h-screen items-center self-center">
      <section className="md:flex-col md:w-4/12 my-64 mx-auto md:self-center">
        <LandingLogo welcomeText="Crie sua conta" />
        <div className="flex-col justify-center w-fit">
          <InputText placeholder="Nome" icon={AiOutlineUser} inputType="text"></InputText>

          <InputText placeholder="E-mail" icon={AiOutlineMail} inputType="email"></InputText>

          <InputText placeholder="Senha" inputType="password" icon={AiOutlineLock}></InputText>

          <Button text="Cadastrar" onClick={() => console.log('registered!!!')} color="bg-rose-400"></Button>
          <div className="flex justify-center items-center">
            <AiOutlineArrowLeft className="text-rose-400 h-10 p-2 rounded-lg w-max outline-none mb-5 hover:cursor-pointer"></AiOutlineArrowLeft>
            <LinkText goTo={'/'} text="Voltar para o login" />
          </div>
        </div>
      </section>
      <section className="h-screen w-6/12 hidden md:w-7/12 md:ml-10 lg:block">
        <img
          className="opacity-30 h-screen w-full"
          src="src/assets/stairs.png"
          alt="movie theater"
        />
      </section>
    </div>
  );
};
