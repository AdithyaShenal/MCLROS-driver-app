import { type Stop } from "../hooks/useFetchRoutes";

interface Props {
  stopData: Stop;
}

const getStatusStyles = (status?: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-700";
    case "awaiting pickup":
      return "bg-blue-100 text-blue-700";
    case "collected":
      return "bg-green-100 text-green-700";
    case "failed":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const StopCard = ({ stopData }: Props) => {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-200 hover:shadow-md transition">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">Next Stop</p>
          <p className="text-lg font-semibold text-gray-800">
            #{stopData.order - 1}
          </p>
        </div>

        {/* Status Badge */}
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusStyles(
            stopData.production?.status
          )}`}
        >
          {stopData.production?.status ?? "UNKNOWN"}
        </span>
      </div>

      {/* Divider */}
      <div className="my-3 h-px bg-gray-100" />

      {/* Farmer */}
      <div className="mb-3">
        <p className="text-xs text-gray-500">Farmer</p>
        <p className="text-base font-semibold text-gray-900">
          {stopData.production?.farmer.name}
        </p>
      </div>

      {/* Address */}
      <div className="mb-4">
        <p className="text-xs text-gray-500">Address</p>
        <p className="text-sm font-medium text-gray-700 line-clamp-2">
          {stopData.production?.farmer.address}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">Total Volume</p>
          <p className="text-2xl font-bold text-sky-900">
            {stopData.production?.volume}L
          </p>
        </div>
      </div>
    </div>
  );
};

export default StopCard;
