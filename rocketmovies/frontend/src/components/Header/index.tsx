import { AuthContext } from '@context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <header
      id="header"
      className=" h-28 mb-5 flex items-center justify-between py-5 px-28 bg-gray-900 text-white border-b border-gray-600"
    >
      <div className="flex items-center">
        <h1 className="text-rose-400 ml-4 text-2xl font-semibold">rocketm0vies</h1>
      </div>

      <div className="flex items-center w-6/12">
        <input
          type="text"
          placeholder="Pesquisar por título"
          className="rounded w-full h-14 p-6 mr-4"
        />
      </div>

      <div className="rounded-full p-2 bottom-0 right-0 mt-2 mr-4 flex">
        <div className="flex flex-col justify-center mr-4">
          <p className="text-sm font-medium mb-3">Samuel Haro</p>
          <div className="text-right">
            <a
              onClick={() => setAuth(false)}
              href="#"
              className="block text-xs font-medium text-gray-400 hover:text-rose-300"
            >
              Logout
            </a>
          </div>
        </div>
        <Link to={'/profile'}>
          <img
            src="https://avatars.githubusercontent.com/u/103484037?v=4"
            alt="user-avatar"
            className="h-16 w-16 rounded-full"
          />
        </Link>
      </div>
    </header>
  );
};
