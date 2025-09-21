import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "./gift.interface";
import { giphyApi } from "../api/gipjy.api";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
    const response = await giphyApi.get<GiphyResponse>('/search', {
        params: {
            q: query,
            limit: 25,
        }
    });

    //fetch(`https://api.giphy.com/v1/gifs/search?api_key=9WiVUpOQEpBNC9NxpIMtZ1HDSJ1jBGfn&q=${query}&limit=25&lang=en`)

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)
    }));
}