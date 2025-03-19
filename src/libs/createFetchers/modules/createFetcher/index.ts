import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {CreateFetcher, RequestConfig} from "./types";

const apiClient = axios.create()

export const createFetcher: CreateFetcher = (host, method, sharedHeaders?) =>
    <Request, Response, Path>(config: RequestConfig<Request, Path>) => {
        const {path, body, pathParam, query, headers} = config
        return apiClient.request<AxiosRequestConfig<Request>, AxiosResponse<Response>>({
            method: method,
            url: pathParam ? `${host}${path}/${pathParam}` : `${host}${path}`,
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
