import axios from "axios";

const ServerUrl = `https://staging.fastor.in/v1/`;

export const baseURL = axios.create({
  baseURL: ServerUrl,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});
