import { createContext, useCallback, useEffect, useState } from 'react';
import { allComics } from '../hooks/services';
import { ComicsResponse } from '../types/comicsResponse.interface';
import PaginateInterface from '../types/paginate.interface';

export type ContextInterface = {
    comics: ComicsResponse | null;
    fetchComics: (params?: PaginateInterface) => void,
    changeTerm: (term: string) => void
}

export const ComicContext = createContext({} as ContextInterface);

interface ContextProvider {
    children: React.ReactNode
}

export const ComicProvider = ({ children }: ContextProvider) => {
    const [comics, setComics] = useState<ComicsResponse | null>(null);
    const [term, setTerm] = useState<string>('hulk');

    useEffect(() => {
        fetchComics({ title: term });
    },[term]);
    
    const fetchComics = useCallback((params?: PaginateInterface) => {
        allComics(params).then(response => { setComics(response.data) })
    }, []);

    const changeTerm = useCallback((term: string) => {
        setTerm(term);
    }, [])
    
    return (
        <ComicContext.Provider value={{
            comics,
            fetchComics,
            changeTerm
        }}>
            {children}
        </ComicContext.Provider>
    )
}