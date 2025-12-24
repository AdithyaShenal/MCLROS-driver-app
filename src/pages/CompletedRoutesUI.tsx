import { useQuery } from "@tanstack/react-query";
import useDriverStore from "../store/userStore";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import type { Route } from "../hooks/useFetchRoutes";
import RouteCardInactive from "../components/cards/RouteCardInactive";
import InlineSpinner from "../components/Loaders/InlineSpinner";

const CompletedRoutesUI = () => {
  const { driverId, setDriver } = useDriverStore();

  useEffect(() => {
    setDriver("6935c6c814f7764f6bf9518c", "sumanada");
  }, [setDriver]);

  const {
    data: routes,
    isError,
    error,
    isLoading,
  } = useQuery<Route[], AxiosError>({
    queryKey: ["routes", "completed", driverId],
    queryFn: () =>
      axios
        .get(
          `https://mclros-backend-2.onrender.com/api/routing/routes/driver/${driverId}`
        )
        .then((res) => res.data),

    enabled: !!driverId,
  });

  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <div>
        <p className="font-bold ml-1">Completed routes</p>
        {isLoading && <InlineSpinner />}
        <div className="flex flex-col my-4">
          {routes?.map((route) => (
            <RouteCardInactive routeProps={route} key={route._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CompletedRoutesUI;
