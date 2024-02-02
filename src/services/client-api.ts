import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cf141c39679441509a5ff0f3266e22c2",
  },
});

class ClientApi<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endPoint, config)
      .then((res) => res.data);

  get = (id: string | number) =>
    axiosInstance.get<T>(this.endPoint + "/" + id).then((res) => res.data);
}

export default ClientApi;
