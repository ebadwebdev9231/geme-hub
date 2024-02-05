import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms";
import ClientApi from "../services/client-api";
import Genre from "../entities/Genre";

const clientApi = new ClientApi<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: clientApi.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
