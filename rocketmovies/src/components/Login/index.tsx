import { InputText, Button } from '@components';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

export const Login = () => {
  return (
    <div className="flex-col items-center justify-center h-full w-fit my-64 mx-auto">
      <InputText placeholder="E-mail" icon={AiOutlineMail} inputType="email"></InputText>

      <InputText placeholder="Senha" inputType="password" icon={AiOutlineLock}></InputText>

      <Button text="Entrar" onClick={() => console.log('clicked')} color="bg-rose-400"></Button>
    </div>
  );
};
