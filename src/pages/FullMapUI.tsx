import { useLocation } from "react-router-dom";
import type { Route } from "../hooks/useFetchRoutes";
import MapComponent from "../components/MapComponent";

const FullMapUI = () => {
  const { state } = useLocation();
  const route: Route = state?.route;
  // const currentStop = state?.currentStop;

  return (
    <>
      <div className="w-full h-full">
        <MapComponent route={route} />
      </div>
    </>
  );
};

export default FullMapUI;
