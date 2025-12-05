interface Props {
  name: string;
  onBtnClick: () => void;
}

const ButtonPrimary = ({ name, onBtnClick }: Props) => {
  return (
    <>
      <button
        onClick={onBtnClick}
        className="bg-sky-950 
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

export default ButtonPrimary;
