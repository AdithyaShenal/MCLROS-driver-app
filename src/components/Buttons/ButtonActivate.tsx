interface Props {
  name: string;
  onBtnClick: () => void;
}

const ButtonActivate = ({ name, onBtnClick }: Props) => {
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
        text-lg
        active:bg-sky-900
        "
      >
        {name}
      </button>
    </>
  );
};

export default ButtonActivate;
