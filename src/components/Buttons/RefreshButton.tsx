import { useQueryClient, useIsFetching } from "@tanstack/react-query";

const RefreshButton = () => {
  const queryClient = useQueryClient();
  const isFetching = useIsFetching();

  const isRefreshing = isFetching > 0;

  return (
    <button
      disabled={isRefreshing}
      onClick={async () => {
        if (isRefreshing) return;

        await queryClient.invalidateQueries({ queryKey: ["routes"] });
        await queryClient.invalidateQueries({ queryKey: ["route"] });
      }}
      className="
        border
        p-1
        rounded-lg
        border-gray-200/20
        active:bg-gray-300/25
        disabled:opacity-50
        disabled:active:bg-transparent
        flex
        items-center
        justify-center
      "
    >
      {isRefreshing ? (
        // Inline spinner
        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        // Refresh icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 16h5v5" />
        </svg>
      )}
    </button>
  );
};

export default RefreshButton;
