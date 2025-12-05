const loginUI = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <form className="border rounded-2xl border-gray-300 p-8 w-11/12 max-w-sm">
          <p className="text-3xl text-center font-extrabold">Driver Portal</p>
          <p className="text-center">Sign In</p>

          <div className="flex flex-col gap-1 mt-4">
            <label htmlFor="username" className="font-bold ml-1">
              Username
            </label>
            <input
              autoComplete="on"
              placeholder="Enter your driver id"
              type="text"
              id="username"
              className="border border-gray-300 rounded-md h-10 p-2 placeholder:text-sm placeholder:text-gray-400/70"
            />
          </div>

          <div className="flex flex-col gap-1 mt-4">
            <label htmlFor="pass" className="font-bold ml-1">
              Password
            </label>
            <input
              autoComplete="on"
              placeholder="Enter your password"
              type="text"
              id="pass"
              className="border border-gray-300 rounded-md h-10 p-2 placeholder:text-sm placeholder:text-gray-400/70"
            />
          </div>
          <div className="mt-6">
            <button className="bg-sky-950 text-sky-50 p-4 w-full rounded-md font-bold">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default loginUI;
