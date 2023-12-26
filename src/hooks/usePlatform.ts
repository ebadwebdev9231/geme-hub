import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import clientApi, { FetchResponse } from "../services/client-api";
import { Platform } from "./useGames";

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      clientApi
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;
