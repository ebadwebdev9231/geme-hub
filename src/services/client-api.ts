import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cf141c39679441509a5ff0f3266e22c2",
  },
});
