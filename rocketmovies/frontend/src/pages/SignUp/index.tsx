import { LandingLogo, InputText, Button, LinkText } from '@components';
import { api } from '@service';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineMail, AiOutlineLock, AiOutlineUser, AiOutlineArrowLeft } from 'react-icons/ai';

type FormData = {
  name: string;
  email: string;
  password: string;
};

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    register('name', { required: true });
    register('email', { required: true });
    register('password', { required: true });
  }, []);

  const onSubmit = (data: any) => {
    data.avatar = 'https://connectlab.netlify.app/profile.png';
    console.log(data);
    try {
      api.post('/register', data).then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex h-screen items-center self-center">
      <section className="md:flex-col md:w-4/12 my-64 mx-auto md:self-center">
        <LandingLogo welcomeText="Crie sua conta" />
        <div className="flex-col justify-center w-fit">
          <InputText
            placeholder="Nome"
            icon={AiOutlineUser}
            inputType="text"
            inputName="name"
            func={(e: any) => {
              setValue('name', e.target.value);
            }}
          ></InputText>

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
            icon={AiOutlineLock}
            inputName="password"
            func={(e: any) => {
              setValue('password', e.target.value);
            }}
          ></InputText>

          <Button
            text="Cadastrar"
            onClick={() => console.log('clicked')}
            color="bg-rose-400"
            buttonType="submit"
          ></Button>

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
    </form>
  );
};
