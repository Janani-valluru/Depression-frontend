import axios from "axios";
import { API_URL } from "../components/constants/data";
export default {
  submitFeeling: function (feelings) {
    return axios.post("/api/feelings/:" + feelings.user, feelings);
  },
  getFeeling: function (user) {
    return axios.get("/api/feelings/" + user);
  },
  getByWeek: function (user) {
    return axios.get("/api/graph/week/:" + user);
  },
  getByMonth: function (user) {
    return axios.get("/api/graph/month/:" + user.user);
  },
  getByYear: function (user) {
    return axios.get("/api/graph/year/:" + user.user);
  },
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

  getBySpecificMonth: function (month) {
    return axios.get(
      "/api/feelings/month/:" +
        month.month +
        "/:" +
        month.year +
        "/:" +
        month.user
    );
  },
  getLastEntry: function (user) {
    return axios.get("api/feelings/last/:" + user);
  },
};
