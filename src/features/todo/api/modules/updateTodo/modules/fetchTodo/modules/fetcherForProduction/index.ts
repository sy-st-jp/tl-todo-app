import {
    Path, UpdateTodo, UpdateTodoRequest, UpdateTodoResponse
} from "@/features/todo/api/types";
import {createFetchers} from "@/libs/createFetchers";
import {appConfig} from "@/config";

const todosFetcher = createFetchers(appConfig.todoApiHost)

export const fetcherForProduction: UpdateTodo = async (request, param) => {
    const res = await todosFetcher.put<UpdateTodoRequest,UpdateTodoResponse,Path>({
        path: `/api/todos`,
        body: request,
        pathParam: `${param.id}`
    })
    return res.data
}
