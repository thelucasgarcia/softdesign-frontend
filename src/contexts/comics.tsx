import { createContext, useCallback, useEffect, useState } from 'react';
import useScrollTo from '../hooks/useScrollTo';
import { allComics } from '../hooks/services';
import { ComicsResponse } from '../types/comicsResponse.interface';
import PaginateInterface from '../types/paginate.interface';

export type ContextInterface = {
    comics: ComicsResponse | null,
    term: string,
    fetchComics: (params?: PaginateInterface) => void,
    changeTerm: (term: string) => void
}

export const ComicContext = createContext({} as ContextInterface);

interface ContextProvider {
    children: React.ReactNode
}

export const ComicProvider = ({ children }: ContextProvider) => {
    const [comics, setComics] = useState<ComicsResponse | null>(null);
    const [term, setTerm] = useState<string>('');
    const { scrollToCards } = useScrollTo();
    
    useEffect(() => {
        if (term) {
            setComics(null);
            fetchComics({ title: term, limit: 10 });
        }
    }, [term]);

    useEffect(() => {
        if (comics) {
            scrollToCards()
        }
    }, [comics])

    const fetchComics = useCallback((params?: PaginateInterface) => {
        allComics(params).then(response => { setComics(response.data) })
    }, []);

    const changeTerm = useCallback((term: string) => {
        setTerm(term);
    }, [])

    return (
        <ComicContext.Provider value={{
            comics,
            term,
            fetchComics,
            changeTerm
        }}>
            {children}
        </ComicContext.Provider>
    )
}