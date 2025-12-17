import { create } from "zustand";

interface DriverState {
  driverId: string | null;
  driverName: string | null;

  setDriver: (id: string, name: string) => void;
  clearDriver: () => void;
}

const useDriverStore = create<DriverState>((set) => ({
  driverId: null,
  driverName: null,

  setDriver: (id, name) =>
    set({
      driverId: id,
      driverName: name,
    }),

  clearDriver: () =>
    set({
      driverId: null,
      driverName: null,
    }),
}));

export default useDriverStore;
