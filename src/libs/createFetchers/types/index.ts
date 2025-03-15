import {AxiosHeaders} from "axios";
import {Fetcher} from "../modules/createFetcher/types";

export type CreateFetchers = (host: string, sharedHeaders?: AxiosHeaders) => {
    get: Fetcher,
    post: Fetcher,
    put: Fetcher,
    delete: Fetcher,
    patch: Fetcher,
}
