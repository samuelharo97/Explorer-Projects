import { Button, InputText, LinkText } from '@components';
import { UserProps } from '@types';
import {
  AiOutlineArrowLeft,
  AiOutlineCamera,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUser,
} from 'react-icons/ai';

export const Profile: React.FC<UserProps> = ({ user }) => {
  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    return console.log('submited');
  };
  return (
    <>
      <header className="profile-header flex items-center justify-between h-36 px-36 py-20 mb-32">
        <div className="flex justify-start items-center pt-3.5">
          <AiOutlineArrowLeft className="text-rose-400 h-10 pt-1 w-max outline-none mb-5 hover:cursor-pointer"></AiOutlineArrowLeft>
          <LinkText goTo={'/'} text="Voltar" />
        </div>
        <div>
          <img className="h-48 w-48 mt-48 rounded-full" src={user.avatar} alt="user's avatar" />
          <div className="bg-rose-300 rounded-full w-12 h-12 flex relative left-36 bottom-14 justify-center items-center hover:bg-rose-200 hover:cursor-pointer">
            <AiOutlineCamera fill="black" className=" w-5 h-5"></AiOutlineCamera>
          </div>
        </div>
        <div className="w-24 mr-2"></div>
      </header>
      {/* flex-col e gap-6 não funcionaram na className da section */}
      <form onSubmit={submit} className="profile-form flex items-center">
        <section className="profile-form">
          <div>
            <InputText icon={AiOutlineUser} dValue={user.name}></InputText>
            <InputText icon={AiOutlineMail} dValue={user.email}></InputText>
          </div>

          <div>
            <InputText icon={AiOutlineLock} placeholder="Senha atual"></InputText>
            <InputText icon={AiOutlineLock} placeholder="Nova senha"></InputText>
          </div>

          <Button color="bg-rose-400" text="Salvar"></Button>
        </section>
      </form>
    </>
  );
};
