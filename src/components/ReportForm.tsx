import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonPrimary from "./ButtonPrimary";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Props {
  route_id: string;
  production_id: string;
  driver_id: string | null;
}

interface Payload {
  route_id: string;
  production_id: string;
  driver_id: string | null;
  failureReason: string;
}

const schema = z.object({
  failureReason: z.string(),
});

type ReportFormData = z.infer<typeof schema>;

const ReportForm = ({ route_id, production_id, driver_id }: Props) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (payload: Payload) =>
      axios
        // .post("http://localhost:4000/api/routing/routes/pickup/report", payload)
        .post(
          "https://mclros-backend-2.onrender.com/api/routing/routes/pickup/report",
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
  } = useForm<ReportFormData>({
    resolver: zodResolver(schema),
  });

  const submitHandler = (data: ReportFormData) => {
    mutate({
      route_id,
      production_id,
      driver_id,
      failureReason: data.failureReason,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex 
            flex-col 
            border 
            border-gray-300 
            p-3
            rounded-lg    
        "
      >
        <label htmlFor="report" className="font-bold ml-1">
          Report issue
        </label>
        <select
          {...register("failureReason")}
          name=""
          id="report"
          className="border 
            border-gray-300 
            rounded-md 
            h-10 
            p-2 
            placeholder:text-sm 
            placeholder:text-gray-400/70
            my-2
            "
        >
          <option value="Other">Other</option>
          <option value="Production wasn't available">
            Production wasn't available
          </option>
          <option value="Farmer wasn't available">
            Farmer wasn't available
          </option>
        </select>
        <p className="text-red-500 m-1 font-bold text-xs">
          {errors && errors.failureReason?.message}
        </p>
        <ButtonPrimary name="Submit" onBtnClick={() => {}} />
      </form>
    </>
  );
};

export default ReportForm;
