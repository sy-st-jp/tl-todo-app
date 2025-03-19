import {GetTodos, GetTodosResponse, Path} from "@/features/todo/api/types";
import {createFetchers} from "@/libs/createFetchers";
import {appConfig} from "@/config";

const todosFetcher = createFetchers(appConfig.todoApiHost)

export const fetcherForProduction: GetTodos = async () => {
    const res = await todosFetcher.get<undefined,GetTodosResponse,Path>({
        path: "/api/todos",
        body: undefined
    })
    return res.data
}
