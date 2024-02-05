import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ms from "ms";
import ClientApi from "../services/client-api";
import Platform from "../entities/Platform";

const clientApi = new ClientApi<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: clientApi.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
