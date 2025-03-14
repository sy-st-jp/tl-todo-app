import {AxiosRequestConfig} from "axios";

export type RequestConfig<RequestBody, Path> = {
    path: Path;
    body?: RequestBody;
    query?: Record<string, unknown>;
    headers?: AxiosRequestConfig["headers"];
};
