import { useQuery } from "@tanstack/react-query";
import ClientApi from "../services/client-api";
import Trailer from "../entities/Trailer";

const useTrailers = (gameId: number) => {
  const clientApi = new ClientApi<Trailer>(`games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: clientApi.getAll,
  });
};

export default useTrailers;
