interface Props {
  onClick: () => void;
  text: string;
  color?: string;
  width?: string;
}

export const Button: React.FC<Props> = ({ onClick, text, color, width = '80' }) => {
  return (
    <button
      className={`text-white font-bold h-14 p-2 rounded-lg shadow-md outline-none w-${width} m-3 ${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
