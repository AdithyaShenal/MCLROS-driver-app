import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import StopCard from "../components/StopCard";
import ButtonSecondary from "../components/ButtonSecondary";
import ButtonWarning from "../components/ButtonWarning";

const ActiveRouteUI = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="border h-60 rounded-lg border-gray-300"></div>
        <div className="border h-30 rounded-lg bg-sky-950 border-gray-300"></div>
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
