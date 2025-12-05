const RouteCard = () => {
  return (
    <>
      <div className="flex flex-col gap-2 p-4 border border-gray-300 rounded-lg">
        <div className="flex justify-between font-bold">
          <span className="text-lg">ABC 20 20</span>
          <span className="bg-amber-400 px-1 rounded-lg">Pending</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="">No of Stops</span>
          <span className="">10</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="">Total Load</span>
          <span className="">100 liters</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="">Total distance</span>
          <span className="">34 Km</span>
        </div>
      </div>
    </>
  );
};

export default RouteCard;
