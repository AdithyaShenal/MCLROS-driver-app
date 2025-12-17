const NavBar = () => {
  return (
    <>
      <div className="h-14 bg-sky-950 text-sky-50 flex gap-2 items-center justify-between p-2">
        <div className="font-bold">Driver Navigator</div>
        <div className="flex justify-center gap-2">
          <div></div>
          <div
            className="
            border
            p-1
            rounded-lg
            border-gray-200/20
            active:bg-gray-300/25
          "
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
            >
              <path d="m16 17 5-5-5-5" />
              <path d="M21 12H9" />
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
