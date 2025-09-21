import { useRef, useState } from "react";

import type { Gif } from "../actions/gift.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";

// const gifsCache: Record<string, Gif[]> = {}; // Esto es key,value pair, por ende funciona con map, arreglos etc, se pone afuera para que no pierda el valor

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([])

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermnClicked = async (term: string) => { //Se usa el nombre handle por que son manejadores
        // if (gifsCache[term]) {
        //     setGifs(gifsCache[term]);
        //     return;
        // }

        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }

        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    }

    const handleSearch = async (query: string) => {
        if (!query) return;

        query = query.trim().toLocaleLowerCase();
        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms.slice(0, 7)]);

        const gifs = await getGifsByQuery(query)
        setGifs(gifs);

        // gifsCache[query] = gifs;
        gifsCache.current[query] = gifs;

        console.log('GIFSSSSSSSSSS ', gifsCache);
    }

    return {
        //Values
        gifs,

        //Methods / Actions
        handleSearch,
        previousTerms,
        handleTermnClicked
    }
}


