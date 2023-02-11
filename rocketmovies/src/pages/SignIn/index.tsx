import { InputText, Button, LinkText, LandingLogo } from '@components';
import { AuthContext } from '@context';
import { useContext } from 'react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';


export const SignIn = () => {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <div className="flex h-screen items-center self-center">
      <section className="md:flex-col md:w-4/12 my-64 mx-auto md:self-center">
        <LandingLogo welcomeText="Faça seu login" />
        <div className="flex-col justify-center w-fit">
          <InputText placeholder="E-mail" icon={AiOutlineMail} inputType="email"></InputText>

          <InputText placeholder="Senha" inputType="password" icon={AiOutlineLock}></InputText>

          <Button text="Entrar" onClick={() => setAuth(true)} color="bg-rose-400"></Button>
          <LinkText goTo={'/register'} text="Criar conta" />
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
