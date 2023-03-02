import { IconType } from 'react-icons';

interface Props {
  placeholder?: string;
  dValue?: string | undefined; // default value
  inputType?: string;
  icon: IconType;
  inputName?: string;
  func?: any;
}

export const InputText: React.FC<Props> = ({
  placeholder,
  icon: Icon,
  inputType = 'text',
  dValue = undefined,
  inputName,
  func,
}) => {
  return (
    <div className="relative m-3">
      <input
        className="w-80 h-14 p-2 pl-12 rounded-lg shadow-md outline-none"
        placeholder={placeholder}
        defaultValue={dValue}
        type={inputType}
        name={inputName}
        onChange={func}
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
