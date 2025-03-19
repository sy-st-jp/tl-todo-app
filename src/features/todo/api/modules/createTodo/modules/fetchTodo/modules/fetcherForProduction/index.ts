import {
    CreateTodo,
    CreateTodoRequest,
    CreateTodoResponse,
    Path
} from "@/features/todo/api/types";
import {createFetchers} from "@/libs/createFetchers";
import {appConfig} from "@/config";

const todosFetcher = createFetchers(appConfig.todoApiHost)

export const fetcherForProduction: CreateTodo = async (request) => {
    const res = await todosFetcher.post<CreateTodoRequest,CreateTodoResponse,Path>({
        path: "/api/todos",
        body: request
    })
    return res.data
}
