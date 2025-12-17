interface Props {
  onButtonClick: () => void;
}

const GPSButton = ({ onButtonClick }: Props) => {
  return (
    <>
      <div
        className="w-10 h-10 
        border 
        border-gray-300 
        rounded-lg 
        flex 
        justify-center 
        items-center
        active:bg-gray-400
        "
        onClick={onButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-300"
        >
          <line x1="2" x2="5" y1="12" y2="12" />
          <line x1="19" x2="22" y1="12" y2="12" />
          <line x1="12" x2="12" y1="2" y2="5" />
          <line x1="12" x2="12" y1="19" y2="22" />
          <circle cx="12" cy="12" r="7" />
        </svg>
      </div>
    </>
  );
};

export default GPSButton;
