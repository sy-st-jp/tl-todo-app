import {GetTodos} from "@/features/todo/api/types";
import {fetchTodos} from "./modules/fetchTodos";

export const getTodos: GetTodos = () => {
    return fetchTodos()
}
