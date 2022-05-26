import { AxiosRequestConfig } from 'axios';
import api from '../config/axios';
import { ComicsResponse } from '../types/comicsResponse.interface';
import PaginateInterface from '../types/paginate.interface';

function toQueryString(params?: Record<string, string>) {
    const queryString = new URLSearchParams(params);
    return queryString.toString();
}

function toUrl<T extends Record<any, any>>(url: string, params?: T) {
    return Object.keys(params || {}).length ? `${url}?${toQueryString(params)}` : url;
}

export function toHttps(url: string) {
    return url.replace('http://','https://');
}

export const resources = {
    comics: {
        one: (comicId: number) => `/comics/${comicId}`,
        all: (params?: PaginateInterface) => toUrl('/comics', params),
    }
}

export function allComics(params?: PaginateInterface, config?: AxiosRequestConfig) {
    return api.get<ComicsResponse>(resources.comics.all({ ...params }), config);
}

export function oneComic(id: number, config?: AxiosRequestConfig) {
    return api.get<ComicsResponse>(resources.comics.one(id), config);
}

