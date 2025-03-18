import {getTodos} from "../../api";
import useSWR from "swr";
import {useCreateTodo} from "@/features/todo/hooks/useTodo/modules/useCreateTodo";
import {Todo} from "@/features/todo/types/Todo";
import {useUpdateTodo} from "@/features/todo/hooks/useTodo/modules/useUpdateTodo";

export const useTodo = () => {
    const {data, error: getTodosError, isLoading, isValidating, mutate} = useSWR<Todo[], Error, "getTodos">("getTodos", getTodos)
    const createTodo = useCreateTodo(mutate)
    const updateTodo = useUpdateTodo(data, mutate)
    return {
        todos: data,
        operations: {
            getTodos: {
                isLoading: isValidating || isLoading,
                errorMessage: getTodosError?.message,
            },
            createTodo: {
                isLoading: createTodo.isLoading,
                error: {
                    message: createTodo.error.message,
                    handleClear: createTodo.error.handleClear
                },
                handler: createTodo.handler
            },
            updateTodo: {
                isLoading: updateTodo.isLoading,
                error: {
                    message: updateTodo.error.message,
                    handleClear: updateTodo.error.handleClear
                },
                handler: updateTodo.handler
            }
        },
    }
}