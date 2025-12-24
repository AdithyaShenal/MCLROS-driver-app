import ButtonPrimary from "../components/ButtonPrimary";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GPSButton from "../components/Buttons/GPSButton";
import { Geolocation } from "@capacitor/geolocation";
import { useState } from "react";

const schema = z.object({
  farmerName: z
    .string()
    .trim()
    .min(3, "Farmer name must be atleast 3 characters")
    .max(50, "Farmer name is too long"),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  address: z
    .string()
    .trim()
    .min(5, "Address is too short")
    .max(200, "Address is too long"),
  routeNumber: z
    .number({ message: "Route number is required" })
    .int("Route number must be an integer")
    .positive("Route number must be greater than 0"),
  location: z.object({
    lat: z.number({ message: "Please fetch farmer location" }),
    lon: z.number({ message: "Please fetch farmer location" }),
  }),
});

type Location = {
  lat: number;
  lon: number;
};

type RegistrationData = z.infer<typeof schema>;

const RegisterFarmerUI = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: zodResolver(schema),
  });

  const submitHandler = (data: Omit<RegistrationData, "location">) => {
    if (!location) {
      setLocationError("Please fetch farmer location");
      return;
    }

    const payload: RegistrationData = {
      ...data,
      location,
    };

    console.log(payload);
  };

  const fetchLocation = async () => {
    try {
      setLocationError(null);

      // Request permission directly
      const permission = await Geolocation.requestPermissions();

      if (permission.location !== "granted") {
        setLocationError("Location permission denied");
        return;
      }

      // Get current position
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
      });

      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    } catch (err) {
      setLocationError(
        err instanceof Error ? err.message : "Unable to access location"
      );
    }
  };

  return (
    <>
      <p className="font-bold text-xl ml-1">Register Farmer</p>
      <p className="ml-1 text-sm text-gray-400">Add new farmer to the system</p>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-col gap-4 border border-gray-300 rounded-lg p-4 mt-4">
          <p className="text-lg font-bold">Farmer Information</p>

          {/* Name */}
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="fname" className="font-bold ml-1">
              Farmer Name
            </label>
            <input
              {...register("farmerName")}
              autoComplete="on"
              placeholder="Enter farmer's full name"
              type="text"
              id="fname"
              className="border border-gray-300 rounded-md h-10 p-2 placeholder:text-sm placeholder:text-gray-400/70"
            />
            <p className="text-red-500 ml-1 font-bold text-xs">
              {errors.farmerName?.message}
            </p>
          </div>

          {/* Phone number */}
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="pnumber" className="font-bold ml-1">
              Phone Number
            </label>
            <input
              {...register("phoneNumber")}
              autoComplete="on"
              placeholder="Enter phone number"
              type="text"
              id="pnumber"
              className="border border-gray-300 rounded-md h-10 p-2 placeholder:text-sm placeholder:text-gray-400/70"
            />
            <p className="text-red-500 ml-1 font-bold text-xs">
              {errors.phoneNumber?.message}
            </p>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="address" className="font-bold ml-1">
              Address
            </label>
            <input
              {...register("address")}
              autoComplete="on"
              placeholder="Enter full address"
              type="text"
              id="address"
              className="border border-gray-300 rounded-md h-10 p-2 placeholder:text-sm placeholder:text-gray-400/70"
            />
            <p className="text-red-500 ml-1 font-bold text-xs">
              {errors.address?.message}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-2 border border-gray-300 rounded-lg p-4 mt-4">
          <p className="text-lg font-bold">Location</p>

          <div className="text-sm">
            <div className="flex flex-col gap-1">
              <label htmlFor="lcoords" className="font-bold ml-1">
                Location Coordinates
              </label>
              <div className="flex flex-[80%_20%] gap-4 items-center">
                <input
                  {...register("location")}
                  type="text"
                  readOnly
                  value={
                    location
                      ? `${location.lat}, ${location.lon}`
                      : "Tap to fetch location ->"
                  }
                  id="lcoords"
                  className="border border-gray-300 rounded-md h-10 p-2 placeholder:text-sm placeholder:text-gray-400/70"
                />
                <GPSButton onButtonClick={fetchLocation} />
              </div>
            </div>
          </div>

          {locationError && (
            <p className="text-red-500 ml-1 font-bold text-xs">
              {locationError}
            </p>
          )}

          <p className="text-red-500 ml-1 font-bold text-xs">
            {errors.location?.message}
          </p>
        </div>

        {/* Route Assignment */}
        <div className="flex flex-col gap-4 border border-gray-300 rounded-lg p-4 mt-4">
          <p className="text-lg font-bold">Route Assignment</p>

          <div className="flex flex-col gap-1 text-sm">
            <label htmlFor="route_number" className="font-bold ml-1">
              Route Number
            </label>
            <input
              {...register("routeNumber", { valueAsNumber: true })}
              autoComplete="on"
              placeholder="Enter route number"
              type="text"
              id="route_number"
              className="border border-gray-300 rounded-md h-10 p-2 placeholder:text-sm placeholder:text-gray-400/70"
            />
            <p className="text-red-500 ml-1 font-bold text-xs">
              {errors.routeNumber?.message}
            </p>
          </div>
        </div>
        <div className="my-4">
          <ButtonPrimary name="Sumbit" onBtnClick={() => {}} />
        </div>
      </form>
    </>
  );
};

export default RegisterFarmerUI;
