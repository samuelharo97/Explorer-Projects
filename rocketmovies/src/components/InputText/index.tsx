import { IconType } from 'react-icons';

interface Props {
  placeholder: string;
  inputType?: string;
  icon: IconType;
}

export const InputText: React.FC<Props> = ({ placeholder, icon: Icon, inputType = 'text' }) => {
  return (
    <div className="relative m-3">
      <input
        className="w-80 h-14 p-2 pl-12 rounded-lg shadow-md outline-none"
        placeholder={placeholder}
        type={inputType}
      />
      <span className="absolute inset-y-0 left-0 flex items-center px-3">
        <svg
          className="pt-2 h-10 w-10 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <Icon />
        </svg>
      </span>
    </div>
  );
};
