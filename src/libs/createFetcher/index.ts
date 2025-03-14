import axios, {AxiosRequestConfig, Method} from "axios";
import {RequestConfig} from "./types";

const apiClient = axios.create()

export const createFetcher = (host: string, sharedHeaders?: AxiosRequestConfig["headers"]) => {
    const request = (method: Method) =>
        <Request, Response, Path>(config: RequestConfig<Request, Path>) => {
            const {path, body, query, headers} = config
            return apiClient.request<Request, Response>({
                method: method,
                url: `${host}${path}`,
                data: body,
                params: query,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    ...sharedHeaders,
                    ...headers,
                },
            })
        }
    return {
        get: request("GET"),
        post: request("POST"),
        put: request("PUT"),
        delete: request("DELETE"),
    };
};