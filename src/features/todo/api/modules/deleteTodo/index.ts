import {DeleteTodo} from "@/features/todo/api/types";
import {fetchTodo} from "./modules/fetchTodo";

export const deleteTodo: DeleteTodo = (param) => {
    return fetchTodo(param)
}
