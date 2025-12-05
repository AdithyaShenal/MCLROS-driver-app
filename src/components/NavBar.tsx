const NavBar = () => {
  return (
    <>
      <div className="h-10 bg-sky-950 text-sky-50 flex gap-2 items-center justify-between p-2">
        <div>Linker</div>
        <div className="flex justify-center gap-2">
          <div>Refresh icon</div>
          <div>Exit icon</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
