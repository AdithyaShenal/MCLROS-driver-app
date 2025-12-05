const StopCard = () => {
  return (
    <>
      <div className="flex flex-col gap-2 p-4 border border-gray-300 rounded-lg">
        <div className="flex justify-between font-bold">
          <span className="text-lg">Next Stop</span>
          <span className="px-1 rounded-lg">Stop #2</span>
        </div>

        <div className="flex flex-col justify-between text-sm">
          <span>Farmer Name</span>
          <span className="font-bold">K. Saranapala Silva</span>
        </div>

        <div className="flex flex-col justify-between text-sm">
          <span className="">Address</span>
          <span className="font-bold">
            No. 100, Ambewela road, pallwela, nuwaraeliya, pugoda
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <div className="flex flex-col">
            <span className="">Total Liters</span>
            <span className="font-bold">30L</span>
          </div>

          <div className="flex flex-col">
            <span className="">Total distance</span>
            <span className="font-bold">34 Km</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StopCard;
