import {CreateFetchers} from "./types";
import {createFetcher} from "./modules/createFetcher";

export const createFetchers: CreateFetchers = (host, sharedHeaders) => ({
    get: createFetcher(host, "GET", sharedHeaders),
    post: createFetcher(host, "POST", sharedHeaders),
    put: createFetcher(host, "PUT", sharedHeaders),
    delete: createFetcher(host, "DELETE", sharedHeaders),
    patch: createFetcher(host, "PATCH", sharedHeaders),
})
