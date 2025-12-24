import { Dialog } from "@capacitor/dialog";
import { App } from "@capacitor/app";

const ExitButton = () => {
  const handleExit = async () => {
    const { value } = await Dialog.confirm({
      title: "Exit App",
      message: "Do you want to exit the app?",
      okButtonTitle: "Yes",
      cancelButtonTitle: "No",
    });

    if (value) {
      // Send app to background (Android behavior)
      App.exitApp();
    }
  };

  return (
    <button
      onClick={handleExit}
      className="
        border
        p-1
        rounded-lg
        border-gray-200/20
        active:bg-gray-300/25
        flex
        items-center
        justify-center
      "
    >
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
        <path d="m16 17 5-5-5-5" />
        <path d="M21 12H9" />
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      </svg>
    </button>
  );
};

export default ExitButton;
