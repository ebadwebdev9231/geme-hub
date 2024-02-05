import { useQuery } from "@tanstack/react-query";
import ClientApi from "../services/client-api";
import { Game } from "../entities/Game";

const clientApi = new ClientApi<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => clientApi.get(slug),
  });

export default useGame;
