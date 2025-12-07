export const route = {
  distance: 12.4,
  vehicle_id: 1,
  license_no: "SP-AB-4523",
  load: 180,
  stops: [
    {
      load_after_visit: 160,
      node: 1,
      order: 1,
      production: {
        _id: "prod_1001",
        volume: 20,
        status: "collected",
        farmer: {
          _id: "farmer_001",
          name: "Sunil Perera",
          phone: "0771234567",
          address: "Gampaha, Sri Lanka",
          route: 1,
          location: {
            lat: 7.089,
            lon: 79.999,
          },
          createdAt: "2025-01-10T08:10:00Z",
          updatedAt: "2025-01-10T08:15:00Z",
        },
      },
    },
    {
      load_after_visit: 120,
      node: 2,
      order: 2,
      production: {
        _id: "prod_1002",
        volume: 40,
        status: "pending",
        farmer: {
          _id: "farmer_002",
          name: "Kamal Silva",
          phone: "0769876543",
          address: "Ja-Ela, Sri Lanka",
          route: 1,
          location: {
            lat: 7.113,
            lon: 79.983,
          },
          createdAt: "2025-01-11T09:30:00Z",
          updatedAt: "2025-01-11T09:40:00Z",
        },
      },
    },
    {
      load_after_visit: 100,
      node: 3,
      order: 3,
      production: null, // no production for this visit
    },
  ],
};
