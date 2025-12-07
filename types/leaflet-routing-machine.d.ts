// import "leaflet-routing-machine";

// declare module "leaflet" {
//   namespace Routing {
//     function control(options?);
//     function osrmv1(options);
//     function mapbox(token: string, options?);
//   }

//   let Routing: typeof Routing;
// }

// src/types/leaflet-routing-machine.d.ts
import "leaflet";
import "leaflet-routing-machine";

// Extend Leaflet PolylineOptions (smoothFactor belongs here)
declare module "leaflet" {
  interface PolylineOptions {
    smoothFactor?: number;
  }
}

// Extend Routing Machine types
declare module "leaflet-routing-machine" {
  namespace Routing {
    interface LineOptions {
      extendToWaypoints?: boolean;
      missingRouteTolerance?: number;
      smoothFactor?: number; // also add here for safety
    }

    interface RoutingControlOptions {
      draggableWaypoints?: boolean;
      fitSelectedRoutes?: boolean;
      showAlternatives?: boolean;
    }
  }
}
