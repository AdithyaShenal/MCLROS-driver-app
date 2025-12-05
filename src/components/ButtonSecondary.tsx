interface Props {
  name: string;
  onBtnClick: () => void;
}

const ButtonSecondary = ({ name, onBtnClick }: Props) => {
  return (
    <>
      <button
        onClick={onBtnClick}
        className="border border-gray-300 text-shadow-sky-950 p-4 w-full rounded-md font-bold text-lg"
      >
        {name}
      </button>
    </>
  );
};

export default ButtonSecondary;
