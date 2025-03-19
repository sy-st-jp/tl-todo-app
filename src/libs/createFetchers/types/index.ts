import {AxiosHeaders} from "axios";
import { Fetcher } from "../modules/createFetcher/types";

export type Fetchers = {
    get: Fetcher,
    post: Fetcher,
    put: Fetcher,
    delete: Fetcher,
    patch: Fetcher,
}

export type CreateFetchers = (host: string, sharedHeaders?: AxiosHeaders) => Fetchers
