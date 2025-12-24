const InlineSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 w-full">
      <div className="flex flex-col items-center gap-3">
        {/* The Spinner */}
        <div className="relative h-10 w-10">
          {/* Outer Track */}
          <div className="absolute inset-0 rounded-full border-4 border-sky-900/10" />

          {/* Active Spinner Segment */}
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-sky-900 border-r-sky-900/30" />
        </div>

        {/* Minimal Text */}
        {/* <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold tracking-wide text-sky-900/70 uppercase">
            Loading
          </span>
          <span className="flex gap-1">
            <div className="h-1 w-1 animate-pulse rounded-full bg-sky-900/30"></div>
            <div className="h-1 w-1 animate-pulse rounded-full bg-sky-900/30 [animation-delay:200ms]"></div>
            <div className="h-1 w-1 animate-pulse rounded-full bg-sky-900/30 [animation-delay:400ms]"></div>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default InlineSpinner;
