import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ClientApi from "../services/client-api";

const clientApi = new ClientApi<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: clientApi.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;
