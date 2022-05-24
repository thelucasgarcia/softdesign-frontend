import { useContext } from 'react';
import { ComicContext } from '../contexts/comics';

export function useComics() {
    return useContext(ComicContext)
}