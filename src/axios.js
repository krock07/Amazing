import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-5036f/us-central1/api",
  // "https://us-central1-challenge-5036f.cloudfunctions.net/api, //API (cloud function) URL
});

export default instance;
