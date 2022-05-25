import { createContext, useCallback, useState } from 'react';
import _ from 'lodash';

export interface FavoriteInterface {
    id: number,
    title: string,
    image: string,
    details: string,
}

export type ContextInterface = {
    favorites: FavoriteInterface[],
    toggleFavorite: (favorite: FavoriteInterface) => void,
    clearFavorites: () => void
}

export const FavoriteContext = createContext({} as ContextInterface);

interface ContextProvider {
    children: React.ReactNode
}

export const FavoriteProvider = ({ children }: ContextProvider) => {
    const [favorites, setFavorites] = useState<FavoriteInterface[]>([]);

    
    const toggleFavorite = useCallback<ContextInterface['toggleFavorite']>((favorite) => {
        hasFavorite(favorites, favorite.id) ? removeFavorite(favorite) : addFavorite(favorite);
    }, [favorites]);
    
    const hasFavorite = (array: FavoriteInterface[], id: number) => {
        return array.some(x => x.id === id)
    };

    const addFavorite = (favorite: FavoriteInterface) => {
        setFavorites(state => state.concat(favorite))
    };

    const removeFavorite = (favorite: FavoriteInterface) => {
        setFavorites(state => state.filter(x => x.id !== favorite.id));
    }

    const clearFavorites = useCallback<ContextInterface['clearFavorites']>(() => {
        setFavorites([])
    }, [favorites]);

    return (
        <FavoriteContext.Provider value={{
            favorites,
            toggleFavorite,
            clearFavorites
        }}>
            {children}
        </FavoriteContext.Provider>
    )
}