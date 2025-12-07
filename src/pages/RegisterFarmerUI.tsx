import ButtonPrimary from "../components/ButtonPrimary";

const RegisterFarmerUI = () => {
  return (
    <>
      <p className="font-bold text-xl ml-1">Register Farmer</p>
      <p className="ml-1 text-sm text-gray-400">Add new farmer to the system</p>

      <div className="flex flex-col gap-4 border border-gray-300 rounded-lg p-4 mt-4">
        <p className="text-lg font-bold">Farmer Information</p>

        {/* Name */}
        <div className="flex flex-col gap-1 text-sm">
          <label htmlFor="fname" className="font-bold ml-1">
            Farmer Name
          </label>
          <input
            autoComplete="on"
            placeholder="Enter farmer's full name"
            type="text"
            id="fname"
            className="border border-gray-300 rounded-md h-10 p-2 placeholder:text-sm placeholder:text-gray-400/70"
          />
          <p className="text-red-500 ml-1 font-bold text-xs">Dummy warning</p>
        </div>

        {/* Phone number */}
        <div className="flex flex-col gap-1 text-sm">
          <label htmlFor="pnumber" className="font-bold ml-1">
            Phone Number
          </label>
          <input
            autoComplete="on"
            placeholder="Enter phone number"
            type="text"
            id="pnumber"
            className="border border-gray-300 rounded-md h-10 p-2 placeholder:text-sm placeholder:text-gray-400/70"
          />
          <p className="text-red-500 ml-1 font-bold text-xs">Dummy warning</p>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-1 text-sm">
          <label htmlFor="address" className="font-bold ml-1">
            Address
          </label>
          <input
            autoComplete="on"
            placeholder="Enter full address"
            type="text"
            id="address"
            className="border border-gray-300 rounded-md h-10 p-2 placeholder:text-sm placeholder:text-gray-400/70"
          />
          <p className="text-red-500 ml-1 font-bold text-xs">Dummy warning</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex flex-col gap-2 border border-gray-300 rounded-lg p-4 mt-4">
        <p className="text-lg font-bold">Location</p>

        <div className="columns-2 flex gap-2 text-sm">
          <div className="flex flex-col gap-1">
            <label htmlFor="lcoords" className="font-bold ml-1">
              Location Coordinates
            </label>
            <input
              autoComplete="on"
              type="text"
              id="lcoords"
              className="border border-gray-300 rounded-md h-10 p-2 placeholder:text-sm placeholder:text-gray-400/70"
            />
          </div>
          <ButtonPrimary onBtnClick={() => {}} name="Fetch" />
        </div>

        <p className="text-red-500 ml-1 font-bold text-xs">
          location data cannot be access
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
            autoComplete="on"
            placeholder="Enter route number"
            type="text"
            id="route_number"
            className="border border-gray-300 rounded-md h-10 p-2 placeholder:text-sm placeholder:text-gray-400/70"
          />
          <p className="text-red-500 ml-1 font-bold text-xs">
            Route number must be entered
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterFarmerUI;
