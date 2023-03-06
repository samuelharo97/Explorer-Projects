import { InputText, Button, LinkText, LandingLogo } from '@components';
import { AuthContext } from '@context';
import { api } from '@service';
import { Credentials } from '@types';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

export const SignIn = () => {
  const { login, auth } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<Credentials>();

  useEffect(() => {
    register('email', { required: true });
    register('password', { required: true });
  }, []);

  const onSubmit = (data: Credentials) => {
    const { email, password } = data;
    console.log(data);
    login(email, password);
  };
  return (
    <div className="flex h-screen items-center self-center">
      <section className="md:flex-col md:w-4/12 my-64 mx-auto md:self-center">
        <LandingLogo welcomeText="Faça seu login" />
        <form onSubmit={handleSubmit(onSubmit)} className="flex-col justify-center w-fit">
          <InputText
            placeholder="E-mail"
            icon={AiOutlineMail}
            inputType="email"
            inputName="email"
            func={(e: any) => {
              setValue('email', e.target.value);
            }}
          ></InputText>

          <InputText
            placeholder="Senha"
            inputType="password"
            inputName="password"
            func={(e: any) => {
              setValue('password', e.target.value);
            }}
            icon={AiOutlineLock}
          ></InputText>

          <Button text="Entrar" buttonType="submit" color="bg-rose-400"></Button>
          <LinkText goTo={'/register'} text="Criar conta" />
        </form>
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
