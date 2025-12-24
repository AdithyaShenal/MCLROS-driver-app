import { useNavigate, useParams } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import StopCard from "../components/StopCard";
import ButtonSecondary from "../components/ButtonSecondary";
import MapComponent from "../components/MapComponent";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import type { Route } from "../hooks/useFetchRoutes";
import { useEffect, useState } from "react";
import CancelRouteSheet from "../components/CancelRouteSheet";
import RouteCompleteCard from "../components/cards/RouteCompleteCard";
import useDriverStore from "../store/userStore";
import InlineSpinner from "../components/Loaders/InlineSpinner";
import { Dialog } from "@capacitor/dialog";
import { Toast } from "@capacitor/toast";

export interface APIError {
  message: string;
  code?: string;
  details?: string;
  status: number;
}

const ActiveRouteUI = () => {
  const [showCancelSheet, setShowCancelSheet] = useState(false);
  const navigate = useNavigate();
  const { route_id } = useParams();
  const queryClient = useQueryClient();

  const { driverId, setDriver } = useDriverStore();

  useEffect(() => {
    setDriver("6935c6c814f7764f6bf9518c", "sumanada");
  }, [setDriver]);

  const {
    data: route,
    isError,
    error,
    isLoading: routesLoading,
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

  const {
    mutate,
    isError: isCancelationError,
    error: cancelationError,
    isPending: cancelLoading,
  } = useMutation({
    mutationFn: () =>
      // axios.post(`http://localhost:4000/api/routing/routes/cancel/${route_id}`),
      axios.post(
        `https://mclros-backend-2.onrender.com/api/routing/routes/cancel/${route_id}`
      ),

    onSuccess: () => {
      setShowCancelSheet(false);
      navigate("/myroutes");
    },

    onError: (error: AxiosError<APIError>) => {
      Toast.show({
        text: error.response?.data.message ?? "Something went wrong",
        duration: "short",
      });
    },
  });

  const { mutate: completeMutate, isPending: completeLoading } = useMutation({
    mutationFn: () =>
      axios.post(
        // `http://localhost:4000/api/routing/routes/complete/${route_id}`,
        `https://mclros-backend-2.onrender.com/api/routing/routes/complete/${route_id}`,
        { driver_id: driverId }
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["route", route_id] });
      queryClient.invalidateQueries({ queryKey: ["routes"] });
    },

    onError: (error: AxiosError<APIError>) => {
      Toast.show({
        text: error.response?.data.message ?? "Something went wrong",
        duration: "short",
      });
    },
  });

  if (isError || !route) {
    Toast.show({
      text: error?.response?.data.message ?? "Something went wrong",
      duration: "short",
      position: "bottom",
    });

    return;
  }

  // Exclude depot stops (first and last)
  const actionableStops = route.stops.slice(1, -1);

  // Find the next stop that is awaiting pickup
  const currentStop =
    actionableStops.find(
      (stop) => stop.production?.status === "awaiting pickup"
    ) || null;

  // Route is complete if no actionable stops left
  const routeComplete = currentStop === null;

  async function confirmCancel() {
    const { value } = await Dialog.confirm({
      title: "Confirm",
      message: "Are you sure you want to cancel this route?",
      okButtonTitle: "Yes",
      cancelButtonTitle: "No",
    });

    if (value) {
      console.log("Confirmed");
      mutate();
    } else {
      console.log("Cancelled");
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="h-80">
          <MapComponent route={route} />
        </div>
        <ButtonPrimary
          name="Open Map"
          onBtnClick={() =>
            navigate("/map_view", { state: { route, currentStop } })
          }
        />

        {!routeComplete && currentStop && <StopCard stopData={currentStop} />}

        {/* Completion button */}
        {route.status !== "completed" && routeComplete && (
          <ButtonPrimary
            name="Mark as Complete"
            onBtnClick={() => {
              completeMutate();
            }}
          />
        )}

        {routesLoading && <InlineSpinner />}

        {/* Confirmation Card */}
        {route.status === "completed" && <RouteCompleteCard />}

        {/* Confirm button */}
        {!routeComplete && (
          <ButtonPrimary
            name="Confirm Pickup at Stop"
            onBtnClick={() => {
              navigate("/confirm_pickup", {
                state: { currentStop, route_id: route._id },
              });
            }}
          />
        )}
        {completeLoading && <InlineSpinner />}

        {/* Pickup List button */}
        <ButtonSecondary
          name="View Pickup List"
          onBtnClick={() =>
            navigate("/pickup_list", { state: { route_id: route._id } })
          }
        />

        {/* Cancel sheet */}
        <button
          onClick={() => setShowCancelSheet(true)}
          className="mt-4 text-sm text-red-500 underline self-center"
        >
          <div className="w-30 h-1 bg-gray-300 rounded-full"></div>
        </button>

        {showCancelSheet && (
          <CancelRouteSheet
            onCancel={() => setShowCancelSheet(false)}
            onConfirm={() => {
              confirmCancel();
            }}
          />
        )}

        {cancelLoading && <InlineSpinner />}

        {isCancelationError && (
          <p className="text-red-500">{cancelationError.message}</p>
        )}
      </div>
    </>
  );
};

export default ActiveRouteUI;
