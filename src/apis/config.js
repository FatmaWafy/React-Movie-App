import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "75effd940ad786b8b56b84ca24ace400",
  },
});

export default axiosInstance;
