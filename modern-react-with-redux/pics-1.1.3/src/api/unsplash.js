import axios from "axios";

// Mp0Cvk_zAPMSfV7b8cQHrn0KD7Ig1MmgLEGmCSay1F0

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Mp0Cvk_zAPMSfV7b8cQHrn0KD7Ig1MmgLEGmCSay1F0"
  },
});