import {CreateTodo} from "@/features/todo/api/types";
import {fetchTodo} from "./modules/fetchTodo";

export const createTodo: CreateTodo = (request) => {
    return fetchTodo(request)
}
