import axios from "axios";

export default axios.create({
  baseURL: "https://api.mercedes-benz.com/experimental/connectedvehicle_tryout/v2",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`
  }
});