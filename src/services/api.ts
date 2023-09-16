import axios from "axios";

const api = axios.create({
  baseURL: "https://api.football-data.org/v4/",
  headers: {
    "X-Auth-Token": "877483580c33490eb7d65f8c0cb96c8d",
  },
});
export { api };
