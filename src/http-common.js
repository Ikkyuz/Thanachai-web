import axios from "axios";

export default axios.create({
  baseURL: "https://thanachai-api.onrender.com/",
  headers: {
    "Content-type": "application/json"
  }
});