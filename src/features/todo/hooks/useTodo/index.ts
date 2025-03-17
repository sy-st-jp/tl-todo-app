import {getTodos} from "../../api";
import useSWR from "swr";
import {useCreateTodo} from "@/features/todo/hooks/useTodo/modules/useCreateTodo";
import {Todo} from "@/features/todo/types/Todo";

export const useTodo = () => {
    const {data, error: getTodosError, isLoading, isValidating, mutate} = useSWR<Todo[], Error, "getTodos">("getTodos", getTodos)
    const createTodo = useCreateTodo(mutate)
    return {
        todos: data,
        operations: {
            getTodos: {
                isLoading: isValidating || isLoading,
                errorMessage: getTodosError?.message,
            },
            createTodo: {
                isLoading: createTodo.isLoading,
                errorMessage: createTodo.error?.message,
                handler: createTodo.handler
            },
        },
    }
}