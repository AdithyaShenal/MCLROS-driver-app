import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import StopCard from "../components/StopCard";
import ButtonSecondary from "../components/ButtonSecondary";
import ButtonWarning from "../components/ButtonWarning";
import MapComponent from "../components/MapComponent";
import { route } from "../components/Dummy";

const ActiveRouteUI = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="h-80">
          <MapComponent route={route} />
        </div>
        <ButtonPrimary
          name="Open Map"
          onBtnClick={() => navigate("/map_view", { state: { route } })}
        />
        <StopCard />
        <ButtonPrimary
          name="Confirm Pickup at Stop"
          onBtnClick={() => navigate("/confirm_pickup")}
        />
        <ButtonSecondary
          name="View Pickup List"
          onBtnClick={() => navigate("/pickup_list")}
        />
        <ButtonWarning name="Cancel & Exit this Route" onBtnClick={() => {}} />
      </div>
    </>
  );
};

export default ActiveRouteUI;
