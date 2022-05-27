import { ComicInterface } from "./comic.interface";

export type ComicsResponse = {
    code: number,
    status: string,
    copyright: string,
    attributionText: string,
    attributionHTML: string,
    data: {
        offset: number,
        limit: number,
        total: number,
        count: number,
        results: ComicInterface[]
    },
    etag: string
}