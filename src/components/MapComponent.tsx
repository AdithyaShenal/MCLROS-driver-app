import { useState, useEffect, useMemo, useRef } from "react";
import leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { Geolocation } from "@capacitor/geolocation";
import RoutingMachine from "./RoutingMachine";
import { CurrentLocationIcon } from "./MapMarkers/CurrentLocationMarker";
import type { Route } from "../hooks/useFetchRoutes";

interface Props {
  route: Route;
  // currentStop: Stop | null;
}

const depotCoordinates = { lat: 7.019041, lon: 79.969565 };

// Component to center map on current location
function MapCenterUpdater({ center }: { center: leaflet.LatLng | null }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom(), { animate: true });
    }
  }, [center, map]);

  return null;
}

const MapComponent = ({ route }: Props) => {
  const [currentPosition, setCurrentPosition] = useState<leaflet.LatLng | null>(
    null
  );
  const [heading, setHeading] = useState<number>(0);
  const watchIdRef = useRef<string | null>(null);

  // Create route waypoints from stops
  const routeWaypoints = useMemo(() => {
    if (!route || !route.stops) return [];

    return route.stops.map((stop) => {
      if (!stop.production) {
        return leaflet.latLng(depotCoordinates.lat, depotCoordinates.lon);
      }

      const location = stop.production.farmer.location;
      return leaflet.latLng(location.lat, location.lon);
    });
  }, [route]);

  // Start GPS tracking
  useEffect(() => {
    let isActive = true;

    const startTracking = async () => {
      try {
        // Check and request permissions
        const permission = await Geolocation.checkPermissions();
        if (permission.location !== "granted") {
          const request = await Geolocation.requestPermissions();
          if (request.location !== "granted") {
            console.error("Location permission denied");
            return;
          }
        }

        // Watch position updates
        watchIdRef.current = await Geolocation.watchPosition(
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          },
          (position, err) => {
            if (err) {
              console.error("Error getting position:", err);
              return;
            }

            if (position && isActive) {
              const newPos = leaflet.latLng(
                position.coords.latitude,
                position.coords.longitude
              );
              setCurrentPosition(newPos);

              // Update heading if available
              if (
                position.coords.heading !== null &&
                position.coords.heading !== undefined
              ) {
                setHeading(position.coords.heading);
              }
            }
          }
        );
      } catch (error) {
        console.error("Error starting location tracking:", error);
      }
    };

    startTracking();

    // Cleanup
    return () => {
      isActive = false;
      if (watchIdRef.current) {
        Geolocation.clearWatch({ id: watchIdRef.current });
      }
    };
  }, []);

  const mapCenter =
    currentPosition ||
    leaflet.latLng(depotCoordinates.lat, depotCoordinates.lon);

  // return (
  //   <div className="h-full w-full">
  //     <MapContainer
  //       className="h-full rounded-lg border border-gray-300"
  //       center={mapCenter}
  //       zoom={15}
  //       scrollWheelZoom={true}
  //     >
  //       {/* Map Tiles */}
  //       <TileLayer
  //         attribution="&copy Mapbox"
  //         url="https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRpdGh5YXNoZW5hbCIsImEiOiJjbWlrazQ0aTQwZDdtM2VzZGJrcXA0d3ZnIn0.lI5omaXW6lzbln2Vpb3ubA"
  //       />

  //       {/* Route with waypoints */}
  //       <RoutingMachine
  //         wayPoints={routeWaypoints}
  //         key={JSON.stringify(routeWaypoints)}
  //       />

  //       {/* Current location marker with heading */}
  //       {currentPosition && (
  //         <Marker
  //           position={currentPosition}
  //           icon={CurrentLocationIcon(heading)}
  //           key={`marker-${heading}`}
  //         />
  //       )}

  //       {/* Auto-center on current location */}
  //       <MapCenterUpdater center={currentPosition} />
  //     </MapContainer>
  //   </div>
  // );

  // ... keep your imports and other logic the same

  return (
    <div className="h-full w-full">
      <MapContainer
        className="h-full rounded-lg border border-gray-300"
        center={mapCenter}
        zoom={15}
        scrollWheelZoom={true}
      >
        {/* Swapped Mapbox for Google Maps Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.google.com/help/legalnotices_maps/">Google</a>'
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        />

        {/* lyrs parameter guide:
          m = Standard Roadmap
          s = Satellite only
          y = Hybrid
          p = Terrain
          h = Roads only (transparent)
        */}

        {/* Route with waypoints */}
        <RoutingMachine
          pathStyle={{ color: "#4285F4", weight: 4, opacity: 1 }}
          wayPoints={routeWaypoints}
          key={JSON.stringify(routeWaypoints)}
        />

        {/* Current location marker */}
        {currentPosition && (
          <Marker
            position={currentPosition}
            icon={CurrentLocationIcon(heading)}
            key={`marker-${heading}`}
          />
        )}

        <MapCenterUpdater center={currentPosition} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
