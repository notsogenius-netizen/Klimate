import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "./use-local-storage";

interface FavouriteItem {
  id: string;
  lat: number;
  lon: number;
  name: string;
  country: string;
  state?: string;
  addedAt: number;
}

export function useFavourite() {
  const [favourites, setFavourites] = useLocalStorage<FavouriteItem[]>(
    "favourites",
    []
  );

  const queryClient = useQueryClient();

  const favouritesQuery = useQuery({
    queryKey: ["favourites"],
    queryFn: () => favourites,
    initialData: favourites,
    staleTime: Infinity,
  });

  const addToFavourites = useMutation({
    mutationFn: async (city: Omit<FavouriteItem, "id" | "addedAt">) => {
      const newFavourite: FavouriteItem = {
        ...city,
        id: `${city.lat}-${city.lon}}`,
        addedAt: Date.now(),
      };

      const exists = favourites.some((fav) => fav.id === newFavourite.id);

      if (exists) return favourites;

      const newFavourites = [...favourites, newFavourite].slice(0, 10);

      setFavourites(newFavourites);

      return newFavourites;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favourites"],
      });
    },
  });

  const removeFavourite = useMutation({
    mutationFn: async (cityId: string) => {
      const newFavourites = favourites.filter((fav) => fav.id !== cityId);
      setFavourites(newFavourites);
      return newFavourites;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favourites"],
      });
    },
  });

  return {
    favourites: favouritesQuery.data,
    addToFavourites,
    removeFavourite,
    isFavourite: (lat: number, lon: number) =>
      favourites.some((city) => city.lat === lat && city.lon === lon),
  };
}
