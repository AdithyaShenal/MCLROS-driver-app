import RouteCard from "../components/RouteCard";

const MyRoutesUI = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <button className="bg-sky-950 text-white p-4 w-full rounded-md font-bold text-lg">
          Register New Farmer
        </button>

        <button className="border border-gray-300 text-shadow-sky-950 p-4 w-full rounded-md font-bold text-lg">
          Completed Routes
        </button>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <p className="ml-1 text-gray-500 text-sm">Pending Routes</p>
        <RouteCard />
        <RouteCard />
        <RouteCard />
        <RouteCard />
        <RouteCard />
        <RouteCard />
      </div>
    </>
  );
};

export default MyRoutesUI;
