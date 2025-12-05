interface Props {
  name: string;
  onBtnClick: () => void;
}

const ButtonWarning = ({ name, onBtnClick }: Props) => {
  return (
    <>
      <button
        onClick={onBtnClick}
        className="bg-red-600
        text-white 
        p-4 
        w-full 
        rounded-md 
        font-bold 
        text-lg"
      >
        {name}
      </button>
    </>
  );
};

export default ButtonWarning;
