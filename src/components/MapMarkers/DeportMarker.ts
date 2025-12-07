import leaflet from "leaflet";

export const DepotMarker = leaflet.divIcon({
  className: "custom-depot-marker",
  html: `
    <div class="w-6 h-6 rounded-full bg-black border-2 border-white flex items-center justify-center shadow-lg">
        <div class="text-white font-bold text-sm">D</div>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});
