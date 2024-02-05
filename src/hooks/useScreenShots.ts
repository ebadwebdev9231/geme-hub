import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";
import ClientApi from "../services/client-api";

const useScreenshots = (gameId: number) => {
  const clientApi = new ClientApi<Screenshot>(`games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: clientApi.getAll,
  });
};

export default useScreenshots;
