import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.15.11:5000", // Set the base URL to the remote server's address
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

function getHealth() {
  return instance.get("/health"); // Return the promise from the Axios request
}



export { getHealth, instance };
