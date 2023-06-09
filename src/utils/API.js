// utils/api.js
import axios from "axios";

const ENABLE_FETCHING = false; // Set this to true to enable fetching

export function fetchHistory(filters) {
  if (ENABLE_FETCHING) {
    return axios.get("http://your-backend-url/api/history", {
      params: filters,
    });
  } else {
    // Return a promise that resolves with mock data
    return Promise.resolve({
      data: {
        // Your mock data here
      },
    });
  }
}
