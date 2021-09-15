import http from "../config/http-common";

class VehicleDataService {
  getAll() {
    return http.get("/vehicles");
  }

  get(id: string) {
    return http.get(`/vehicles/${id}`);
  }

  getTires(id: string) {
    return http.get(`/vehicles/${id}/tires`);
  }

  getLocation(id: string) {
    return http.get(`/vehicles/${id}/location`);
  }

  getFuel(id: string) {
    return http.get(`/vehicles/${id}/fuel`);
  }
}

export default new VehicleDataService();