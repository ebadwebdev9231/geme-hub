import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import clientApi, { FetchResponse } from "../services/client-api";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      clientApi.get<FetchResponse<Genre>>("/genres").then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
