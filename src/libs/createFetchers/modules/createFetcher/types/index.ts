import {AxiosHeaders, AxiosRequestConfig, AxiosResponse, Method} from "axios";

export type RequestConfig<RequestBody, Path> = {
    path: Path;
    body?: RequestBody;
    query?: Record<string, unknown>;
    headers?: AxiosRequestConfig["headers"];
};

export type Fetcher = <Request, Response, Path>(config: RequestConfig<Request, Path>) => Promise<AxiosResponse<Response>>

export type CreateFetcher = (host: string, method: Method, sharedHeaders?: AxiosHeaders) => Fetcher
