interface Props {
  name: string;
  onBtnClick: () => void;
}

const baseBtn =
  "w-full rounded-lg px-4 py-3 text-[16px] font-semibold \
   transition active:scale-95 active:opacity-80 \
   focus:outline-none focus-visible:ring-2";

const ButtonSecondary = ({ name, onBtnClick }: Props) => {
  return (
    <button
      onClick={onBtnClick}
      className={`${baseBtn}
        bg-sky-50 text-sky-900
        border border-sky-200
        focus-visible:ring-sky-300`}
    >
      {name}
    </button>
  );
};

export default ButtonSecondary;
