// import leaflet, { type ControlOptions, LatLng } from "leaflet";
// import "leaflet-routing-machine";
// import { DepotMarker } from "./MapMarkers/DeportMarker";
// import { WaypointMarker } from "./MapMarkers/WaypointMarker";
// import { createControlComponent } from "@react-leaflet/core";

// interface Props extends ControlOptions {
//   wayPoints: LatLng[];
// }

// const createRoutingMachineLayer = ({ wayPoints }: Props) => {
//   const plan = leaflet.Routing.plan(wayPoints, {
//     createMarker: (
//       waypointIndex: number,
//       waypoint: { latLng: LatLng },
//       noOfWaypoints: number
//     ) => {
//       const lastIndex = noOfWaypoints - 1;

//       if (waypointIndex === lastIndex) {
//         return false;
//       }

//       if (waypointIndex === 0) {
//         return leaflet.marker(waypoint.latLng, {
//           icon: DepotMarker,
//         });
//       }

//       return leaflet.marker(waypoint.latLng, {
//         icon: WaypointMarker(waypointIndex),
//       });
//     },
//   });

//   const instance = leaflet.Routing.control({
//     plan,
//     waypoints: wayPoints,
//     lineOptions: {
//       styles: [
//         { color: "white", weight: 10, opacity: 1 },
//         { color: "#1A73E8", weight: 6, opacity: 1 },
//       ],
//       extendToWaypoints: true,
//       missingRouteTolerance: 100,
//     },
//     show: false,
//     addWaypoints: false,
//     fitSelectedRoutes: true,
//     showAlternatives: true,
//   });

//   instance.on("routesfound", function () {
//     const container = instance.getContainer();
//     if (container) {
//       container.style.display = "none";
//     }
//   });

//   return instance;
// };

// const RoutingMachine = createControlComponent(createRoutingMachineLayer);

// export default RoutingMachine;

// ---------------------------------------------------------------------------

// import leaflet, { type ControlOptions, LatLng } from "leaflet";
// import "leaflet-routing-machine";
// import { DepotMarker } from "./MapMarkers/DeportMarker";
// import { WaypointMarker } from "./MapMarkers/WaypointMarker";
// import { createControlComponent } from "@react-leaflet/core";

// interface Props extends ControlOptions {
//   wayPoints: LatLng[];
// }

// const createRoutingMachineLayer = ({ wayPoints }: Props) => {
//   const plan = leaflet.Routing.plan(wayPoints, {
//     createMarker: (
//       waypointIndex: number,
//       waypoint: { latLng: LatLng },
//       noOfWaypoints: number
//     ) => {
//       const lastIndex = noOfWaypoints - 1;

//       // Don't show marker for the last waypoint (to avoid duplication)
//       if (waypointIndex === lastIndex) {
//         return false;
//       }

//       // First waypoint is depot
//       if (waypointIndex === 0) {
//         return leaflet.marker(waypoint.latLng, {
//           icon: DepotMarker,
//         });
//       }

//       // Numbered waypoints for stops
//       return leaflet.marker(waypoint.latLng, {
//         icon: WaypointMarker(waypointIndex),
//       });
//     },
//   });

//   const instance = leaflet.Routing.control({
//     plan,
//     waypoints: wayPoints,
//     lineOptions: {
//       styles: [
//         { color: "white", weight: 10, opacity: 1 },
//         { color: "#1A73E8", weight: 6, opacity: 1 },
//       ],
//       extendToWaypoints: true,
//       missingRouteTolerance: 100,
//     },
//     show: false,
//     addWaypoints: false,
//     fitSelectedRoutes: false, // Don't auto-fit since we're tracking
//     showAlternatives: false, // Disable alternatives for cleaner tracking
//   });

//   instance.on("routesfound", function () {
//     const container = instance.getContainer();
//     if (container) {
//       container.style.display = "none";
//     }
//   });

//   return instance;
// };

// const RoutingMachine = createControlComponent(createRoutingMachineLayer);

// export default RoutingMachine;

import leaflet, { type ControlOptions, LatLng } from "leaflet";
import "leaflet-routing-machine";
import { DepotMarker } from "./MapMarkers/DeportMarker";
import { WaypointMarker } from "./MapMarkers/WaypointMarker";
import { createControlComponent } from "@react-leaflet/core";

interface Props extends ControlOptions {
  wayPoints: LatLng[];
}

const createRoutingMachineLayer = ({ wayPoints }: Props) => {
  const plan = leaflet.Routing.plan(wayPoints, {
    createMarker: (
      waypointIndex: number,
      waypoint: { latLng: LatLng },
      noOfWaypoints: number
    ) => {
      const lastIndex = noOfWaypoints - 1;

      // Hide last waypoint marker (end of route)
      if (waypointIndex === lastIndex) {
        return false;
      }

      // First waypoint - Depot marker
      if (waypointIndex === 0) {
        return leaflet.marker(waypoint.latLng, {
          icon: DepotMarker,
        });
      }

      // Numbered waypoint markers for stops
      return leaflet.marker(waypoint.latLng, {
        icon: WaypointMarker(waypointIndex),
      });
    },
  });

  const instance = leaflet.Routing.control({
    plan,
    waypoints: wayPoints,
    lineOptions: {
      styles: [
        { color: "white", weight: 10, opacity: 1 },
        { color: "#1A73E8", weight: 6, opacity: 1 },
      ],
      extendToWaypoints: true,
      missingRouteTolerance: 100,
    },
    show: false,
    addWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  // Hide routing instructions panel
  instance.on("routesfound", function () {
    const container = instance.getContainer();
    if (container) {
      container.style.display = "none";
    }
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutingMachineLayer);

export default RoutingMachine;
