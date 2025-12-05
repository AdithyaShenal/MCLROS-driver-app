const loginUI = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <form className="border rounded-2xl border-gray-300 p-8 w-full">
          <p className="text-3xl text-center font-extrabold">Driver Portal</p>
          <p className="text-center">Sign In</p>

          <div className="flex flex-col gap-1 mt-4 text-sm">
            <label htmlFor="username" className="font-bold ml-1">
              Username
            </label>
            <input
              autoComplete="on"
              placeholder="Enter your driver id"
              type="text"
              id="username"
              className="border border-gray-300 rounded-md h-10 p-2"
            />
          </div>

          <div className="flex flex-col gap-1 mt-4 text-sm">
            <label htmlFor="pass" className="font-bold ml-1">
              Password
            </label>
            <input
              autoComplete="on"
              placeholder="Enter your password"
              type="text"
              id="pass"
              className="border border-gray-300 rounded-md h-10 p-2"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-sky-950 text-sky-50 p-4 w-full rounded-md font-bold"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default loginUI;
