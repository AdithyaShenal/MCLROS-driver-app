import type { Route } from "../../hooks/useFetchRoutes";

interface Props {
  routeProps: Route;
}
const STATUS_BADGE_CLASSES: Record<string, string> = {
  dispatched:
    "px-2 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800",
  completed:
    "px-2 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800",
  canceled:
    "px-2 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-800",
  inProgress:
    "px-2 py-1 rounded-full text-sm font-bold bg-yellow-100 text-yellow-800",
};

const RouteCardInactive = ({ routeProps }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-2 p-4 border border-gray-300 rounded-lg">
        <div className="flex justify-between font-bold">
          <span className="text-lg">{routeProps.license_no}</span>
          <span
            className={`${
              STATUS_BADGE_CLASSES[routeProps.status]
            } transition-colors duration-200`}
          >
            {routeProps.status.toUpperCase()}
          </span>
        </div>

        <div className="flex flex-col divide-y divide-gray-200 text-sm">
          <div className="flex justify-between py-1">
            <span>Total stops</span>
            <span>{routeProps.stops.length}</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Total load</span>
            <span>{routeProps.load} litres</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Total distance</span>
            <span>{routeProps.distance / 1000} Km</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RouteCardInactive;
