import { useLocation, useNavigate } from "react-router-dom";
import StopCard from "../components/StopCard";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import ButtonPrimary from "../components/ButtonPrimary";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useDriverStore from "../store/userStore";
import { useEffect } from "react";
import ReportForm from "../components/ReportForm";

interface Payload {
  route_id: string;
  production_id: string;
  driver_id: string | null;
  collectedVolume: number;
}

const schema = z.object({
  collectedVolume: z.number().min(0, "Volume must be greater than 0"),
  report: z.string().optional(),
});

type ConfirmationFormData = z.infer<typeof schema>;

const PickupConfirmUI = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { state } = useLocation();
  const currentStop = state?.currentStop;
  const route_id = state.route_id;

  const { driverId, setDriver } = useDriverStore();

  useEffect(() => {
    setDriver("6935c6c814f7764f6bf9518c", "sumanada");
  }, [setDriver]);

  const { mutate } = useMutation({
    mutationFn: (payload: Payload) =>
      axios
        // .post("http://localhost:4000/api/routing/routes/confirm", payload)
        .post(
          "https://mclros-backend-2.onrender.com/api/routing/routes/confirm",
          payload
        )
        .then((res) => res.data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["routes"] });
      navigate(`/active_route/${route_id}`);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmationFormData>({
    resolver: zodResolver(schema),
  });

  const submitHandler = (data: ConfirmationFormData) => {
    mutate({
      route_id,
      production_id: currentStop.production._id,
      driver_id: driverId,
      collectedVolume: data.collectedVolume,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {currentStop && <StopCard stopData={currentStop} />}
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col gap-1 border p-4 border-gray-300 rounded-lg"
        >
          <label htmlFor="fname" className="font-bold ml-1">
            Enter collected volume
          </label>
          <input
            {...register("collectedVolume", { valueAsNumber: true })}
            autoComplete="on"
            placeholder="Enter volume"
            type="text"
            id="fname"
            className="border border-gray-300 rounded-md h-10 p-2 placeholder:text-sm placeholder:text-gray-400/70"
          />
          <p className="text-red-500 m-1 font-bold text-xs">
            {errors && errors.collectedVolume?.message}
          </p>
          <ButtonPrimary name="Confirm" onBtnClick={() => {}} />
        </form>
        <ReportForm
          route_id={route_id}
          production_id={currentStop.production._id}
          driver_id={driverId}
        />
      </div>
    </>
  );
};

export default PickupConfirmUI;
