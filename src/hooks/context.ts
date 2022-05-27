import { useContext } from "react";
import { ComicContext } from "../contexts/comics";
import { FavoriteContext } from "../contexts/favorites";

export function useComics() {
    return useContext(ComicContext);
}

export function useFavorites() {
    return useContext(FavoriteContext);
}