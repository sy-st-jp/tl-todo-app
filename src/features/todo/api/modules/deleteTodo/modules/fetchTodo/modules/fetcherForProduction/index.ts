import {
    DeleteTodo, DeleteTodoResponse,
    Path
} from "@/features/todo/api/types";
import {createFetchers} from "@/libs/createFetchers";
import {appConfig} from "@/config";

const todosFetcher = createFetchers(appConfig.todoApiHost)

export const fetcherForProduction: DeleteTodo = async (param) => {
    const res = await todosFetcher.delete<void, DeleteTodoResponse, Path>({
        path: "/api/todos",
        pathParam: `${param.id}`
    })
    return res.data
}
