import axios, { AxiosError } from "axios";
import { useLocation } from "react-router-dom";
import type { Route } from "../hooks/useFetchRoutes";
import { useQuery } from "@tanstack/react-query";
import StopCard from "../components/StopCard";
import InlineSpinner from "../components/Loaders/InlineSpinner";

interface APIError {
  message: string;
  code?: string;
  details?: string;
  status: number;
}

const PickupList = () => {
  const { state } = useLocation();
  const route_id = state.route_id;

  const {
    data: route,
    isError,
    error,
    isLoading,
  } = useQuery<Route, AxiosError<APIError>>({
    queryKey: ["route", route_id],
    queryFn: () =>
      axios
        // .get<Route>(`http://localhost:4000/api/routing/routes/${route_id}`)
        .get<Route>(
          `https://mclros-backend-2.onrender.com/api/routing/routes/${route_id}`
        )
        .then((res) => res.data),
  });

  const slicedArray = route?.stops.slice(1, -1);

  if (isError || !slicedArray)
    return <div>{error?.response?.data.message}</div>;

  return (
    <>
      {isLoading && <InlineSpinner />}
      <div
        className="
          flex
          flex-col
          gap-2
      "
      >
        {slicedArray.map((stop) => (
          <StopCard stopData={stop} />
        ))}
      </div>
    </>
  );
};

export default PickupList;
