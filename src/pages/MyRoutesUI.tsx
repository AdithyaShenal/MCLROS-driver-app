import { useNavigate } from "react-router-dom";
import RouteCard from "../components/RouteCard";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import { useFetchRoutes } from "../hooks/useFetchRoutes";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import useDriverStore from "../store/userStore";
import { useEffect, useState } from "react";
import InlineSpinner from "../components/Loaders/InlineSpinner";
import { Toast } from "@capacitor/toast";

interface APIError {
  message: string;
  code?: string;
  details?: string;
  status: number;
}

const MyRoutesUI = () => {
  const navigate = useNavigate();
  const [cardError, setCardError] = useState<string | null>(null);
  const [errorRouteId, setErrorRouteId] = useState<string | null>(null);
  const [loadingRouteId, setLoadingRouteId] = useState<string | null>(null);

  // Just for testing
  const { driverId, setDriver } = useDriverStore();

  useEffect(() => {
    setDriver("6935c6c814f7764f6bf9518c", "sumanada");
  }, [setDriver]);

  const {
    data: routes,
    isError,
    error,
    isLoading,
  } = useFetchRoutes(driverId ?? "");

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (routeId: string) =>
      axios
        // .post("http://localhost:4000/api/routing/routes/activate"
        .post(
          "https://mclros-backend-2.onrender.com/api/routing/routes/activate",
          {
            driver_id: driverId,
            route_id: routeId,
          }
        )
        .then((res) => res.data),

    onError: (error: AxiosError<APIError>, routeId: string) => {
      setErrorRouteId(routeId);
      setCardError(error.response?.data.message ?? "Unknown Error");
    },
  });

  if (isError) {
    Toast.show({
      text: error.response?.data.message ?? "Something went wrong",
      duration: "short",
      position: "bottom",
    });
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <ButtonPrimary
          name="Register New Farmer"
          onBtnClick={() => navigate("/register_farmer")}
        />

        <ButtonSecondary
          onBtnClick={() => navigate("/completed_routes")}
          name="Completed Routes"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <p className="ml-1 text-gray-500 text-sm">Pending Routes</p>
        {isLoading && <InlineSpinner />}

        {routes?.map((route) => (
          <RouteCard
            isActive={route.active}
            isLoading={loadingRouteId === route._id && isPending}
            error={errorRouteId === route._id ? cardError : null}
            key={route.license_no}
            onCardClick={async () => {
              if (!route.active) {
                setLoadingRouteId(route._id);
                await mutateAsync(route._id);
                navigate(`/active_route/${route._id}`);
              }
              if (route.active) {
                navigate(`/active_route/${route._id}`);
              }
            }}
            routeProps={route}
          />
        ))}
      </div>
    </>
  );
};

export default MyRoutesUI;
