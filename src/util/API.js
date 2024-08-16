import axios from "axios";
import { API_URL } from "../components/constants/data";
export default {
  /* getDashboardData: function (user) {
    if (user === undefined) {
      user = "baby";
    }
    return axios.get("http://localhost:8000/api/tests?username=" + user);
  },
  */
  getDashboardData: function (username) {
    return axios.get(`${API_URL}/api/tests?username=` + username);
  },
};
