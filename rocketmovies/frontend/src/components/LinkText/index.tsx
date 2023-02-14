import { Link, To } from 'react-router-dom';

interface Props {
  goTo: To;
  text: string;
}

export const LinkText: React.FC<Props> = ({ goTo, text }) => {
  return (
    <div className="flex justify-center">
      <Link to={goTo}
        className={`text-rose-400 bg-transparent font-bold h-14 p-2 rounded-lg w-max outline-none m-3 hover:cursor-pointer`}
      >
        {text}
      </Link>
    </div>
  );
};
