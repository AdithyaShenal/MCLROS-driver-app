interface Props {
  name: string;
  onBtnClick: () => void;
}

const baseBtn =
  "w-full rounded-lg px-4 py-3 text-[16px] font-semibold \
   transition active:scale-95 active:opacity-80 \
   focus:outline-none focus-visible:ring-2";

const ButtonSuccess = ({ name, onBtnClick }: Props) => {
  return (
    <button
      onClick={onBtnClick}
      className={`${baseBtn}
        bg-emerald-600 text-white
        focus-visible:ring-emerald-400`}
    >
      {name}
    </button>
  );
};

export default ButtonSuccess;
