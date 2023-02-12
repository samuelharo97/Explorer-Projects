interface TagProps {
  name: string;
}

export const Tag: React.FC<TagProps> = ({ name }) => {
  return (
    <p className="bg-neutral-700 py-1 px-2 rounded-xl hover:bg-neutral-600 hover:cursor-pointer">
      {name}
    </p>
  );
};
