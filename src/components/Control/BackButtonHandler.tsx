// import { useEffect, type ReactNode } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { App } from "@capacitor/app";
// import { Dialog } from "@capacitor/dialog";
// import type { PluginListenerHandle } from "@capacitor/core";

// interface BackButtonHandlerProps {
//   children: ReactNode;
// }

// const BackButtonHandler: React.FC<BackButtonHandlerProps> = ({ children }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     let listenerHandle: PluginListenerHandle | undefined;

//     const setupListener = async () => {
//       listenerHandle = await App.addListener("backButton", async () => {
//         console.log("Back button pressed on:", location.pathname);

//         if (location.pathname === "/login") return;

//         if (location.pathname !== "/" && location.pathname !== "/login") {
//           navigate(-1);
//           return;
//         }

//         if (location.pathname === "/") {
//           const result = await Dialog.confirm({
//             title: "Exit App",
//             message: "Do you want to exit the app?",
//           });

//           if (result.value) App.exitApp();
//         }
//       });
//     };

//     setupListener();

//     return () => {
//       if (listenerHandle) listenerHandle.remove();
//     };
//   }, [location.pathname, navigate]);

//   return <>{children}</>;
// };

// export default BackButtonHandler;

// --------------------------------------------------------------------------------------------------------------------

// import { useEffect, type ReactNode } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { App } from "@capacitor/app";
// import { Dialog } from "@capacitor/dialog";
// import type { PluginListenerHandle } from "@capacitor/core";

// interface BackButtonHandlerProps {
//   children: ReactNode;
// }

// const BackButtonHandler: React.FC<BackButtonHandlerProps> = ({ children }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // This is the core setup function
//     const setupBackButtonListener = async () => {
//       // 1. Add the listener and capture the handle
//       const listenerHandle: PluginListenerHandle = await App.addListener(
//         "backButton",
//         async () => {
//           const path = location.pathname; // The captured path will be current for this effect cycle
//           console.log("Back button pressed on:", path);

//           // ----------------------------------------------------
//           // Logic 1: Do Nothing on Login Page
//           // The user should not be able to back out of /login,
//           // they must login or use a specific exit/close button if provided.
//           if (path === "/login") {
//             return;
//           }

//           // ----------------------------------------------------
//           // Logic 2: Navigate Back for Inner Pages
//           // If the path is anything other than the root or login, navigate back.
//           if (path !== "/") {
//             navigate(-1);
//             return;
//           }

//           // ----------------------------------------------------
//           // Logic 3: Exit Confirmation on Root Page ("/")
//           if (path === "/") {
//             try {
//               const result = await Dialog.confirm({
//                 title: "Exit App",
//                 message: "Do you want to exit the app?",
//               });

//               if (result.value) {
//                 // Important: Only call exitApp() on Android
//                 App.exitApp();
//               }
//             } catch (error) {
//               console.error("Error showing exit dialog:", error);
//             }
//           }
//         }
//       );

//       return listenerHandle;
//     };

//     let listenerHandle: PluginListenerHandle | undefined;

//     setupBackButtonListener().then((handle) => {
//       listenerHandle = handle;
//     });

//     // 2. Cleanup function to remove the listener when the component unmounts
//     // or when the dependencies ([location.pathname, navigate]) change.
//     return () => {
//       if (listenerHandle) {
//         listenerHandle.remove();
//         listenerHandle = undefined;
//       }
//     };
//     // 3. Dependencies: location is necessary to ensure the callback
//     // uses the current path. navigate is stable but included for completeness.
//   }, [location.pathname, navigate]);

//   return <>{children}</>;
// };

// export default BackButtonHandler;
