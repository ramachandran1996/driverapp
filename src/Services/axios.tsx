import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "http://erp-demo.truckjee.com/api/",
  headers: {
    Accept: "application/json",
  },
});

export default AxiosClient;
