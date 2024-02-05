import { useQuery } from "@tanstack/react-query";
import ClientApi from "../services/client-api";
import ScreenShot from "../entities/ScreenShot";

const useScreenShots = (gameId: number) => {
  const clientApi = new ClientApi<ScreenShot>(`games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: clientApi.getAll,
  });
};

export default useScreenShots;
