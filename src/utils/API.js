// utils/API.js
import axios from "axios";

const ENABLE_FETCHING = false;

export function fetchHistory(filters) {
  if (ENABLE_FETCHING) {
    return axios.get("/api/history", { params: filters });
  } else {
    return Promise.resolve({
      data: {
        // Your mock data here
      },
    });
  }
}

// export function fetchEnrollment(search) {
//   if (ENABLE_FETCHING) {
//     return axios.get("/api/enrollment", { params: search });
//   } else {
//     return Promise.resolve({
//       data: {
//         // Your mock data here
//       },
//     });
//   }
// }
import axios from "axios";

export async function fetchEnrollments(accountNumber) {
  try {
    const response = await axios.get("http://your-api-url", {
      params: {
        accountNumber: accountNumber,
      },
    });

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("There was an error fetching the enrollments", error);
    return [];
  }
}

export function fetchReports(filters) {
  if (ENABLE_FETCHING) {
    return axios.get("/api/Reports", { params: filters });
  } else {
    return Promise.resolve({
      data: {
        // Your mock data here
      },
    });
  }
}

export function updatePreference(title, isToggled) {
  if (ENABLE_FETCHING) {
    return axios.put(`/api/preferences/${title}`, { isToggled });
  } else {
    return Promise.resolve({
      data: {
        // Your mock data here
      },
    });
  }
}

export function fetchPreferences(accountNumber) {
  if (ENABLE_FETCHING) {
    return axios.get(`/api/preferences/${accountNumber}`);
  } else {
    return Promise.resolve({
      data: {
        // Your mock data here
      },
    });
  }
}
