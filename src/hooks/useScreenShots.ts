import { useQuery } from "@tanstack/react-query";
import ClientApi from "../services/client-api";
import Screenshot from "../entities/Screenshot";

const useScreenshots = (gameId: number) => {
  const clientApi = new ClientApi<Screenshot>(`games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: clientApi.getAll,
  });
};

export default useScreenshots;
