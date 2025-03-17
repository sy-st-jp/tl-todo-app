import {UpdateTodo} from "@/features/todo/api/types";
import {fetchTodo} from "./modules/fetchTodo";

export const updateTodo: UpdateTodo = (request, query) => {
    return fetchTodo(request, query)
}
