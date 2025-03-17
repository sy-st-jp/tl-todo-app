import useSWRMutation from "swr/mutation";
import {CreateTodoRequest, CreateTodoResponse} from "@/features/todo/api/types";
import {createTodo} from "@/features/todo/api";
import {Todo} from "@/features/todo/types/Todo";
import {KeyedMutator} from "swr";

export const useCreateTodo = (mutate: KeyedMutator<Todo[]>) => {
    const {trigger, isMutating, error} = useSWRMutation<CreateTodoResponse, Error, "createTodo", CreateTodoRequest, CreateTodoResponse>("createTodo", async (key, {arg}) => {
        return await createTodo(arg)
    }, {
        onSuccess: async () => {
            await mutate()
        }
    })
    const handleCreateTodo = async (title: string) => {
        await trigger({title})
    }
    return {
        handler: handleCreateTodo,
        isLoading: isMutating,
        error: error
    }
}