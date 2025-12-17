const RouteCompleteCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-green-100 border border-green-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="text-green-600 w-8 h-8"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
      <h2 className="text-green-800 font-bold text-lg">Route Completed</h2>
      <p className="text-green-700 text-sm text-center">
        All pickups have been successfully completed.
      </p>
    </div>
  );
};

export default RouteCompleteCard;
