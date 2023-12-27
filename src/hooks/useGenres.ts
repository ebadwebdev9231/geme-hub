import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms";
import ClientApi from "../services/client-api";

const clientApi = new ClientApi<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: clientApi.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
