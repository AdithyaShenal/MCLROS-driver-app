import ExitButton from "./Buttons/ExitButton";
import RefreshButton from "./Buttons/RefreshButton";

const NavBar = () => {
  return (
    <>
      <div className="h-14 bg-sky-950 text-sky-50 flex gap-2 items-center justify-between p-2">
        <div className="font-bold">Navigator</div>
        <div className="flex justify-center gap-2">
          <div className="mr-4">
            <RefreshButton />
          </div>
          <div>
            <ExitButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
