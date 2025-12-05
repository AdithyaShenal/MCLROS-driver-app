import { useNavigate } from "react-router-dom";
import RouteCard from "../components/RouteCard";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";

const MyRoutesUI = () => {
  const navigate = useNavigate();

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
        <RouteCard />
        <RouteCard />
        <RouteCard />
        <RouteCard />
        <RouteCard />
        <RouteCard />
      </div>
    </>
  );
};

export default MyRoutesUI;
