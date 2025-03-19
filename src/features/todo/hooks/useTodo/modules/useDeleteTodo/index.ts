import useSWRMutation from "swr/mutation";
import {
    DeleteTodoPathParam, DeleteTodoResponse,
} from "@/features/todo/api/types";
import {Todo} from "@/features/todo/types/Todo";
import {KeyedMutator} from "swr";
import {useState} from "react";
import {toast} from "@/components/ui/Toater";
import {deleteTodo} from "@/features/todo/api";
import {AxiosError} from "axios";
import {STATUS_MESSAGE} from "@/features/todo/hooks/useTodo/modules/useDeleteTodo/const/STATUS_MESSAGE";

export const useDeleteTodo = (mutate: KeyedMutator<Todo[]>) => {
    const [errorMessage, setErrorMessage] = useState<string>()

    const {trigger, isMutating, error} = useSWRMutation<DeleteTodoResponse, Error, "deleteTodo", {param: DeleteTodoPathParam}, DeleteTodoResponse>("deleteTodo", async (key, {arg}) => {
        return await deleteTodo(arg.param)
    })

    const handleDeleteTodo = async (id: number) => {
        await trigger({param: {id: id}},{
            onSuccess: async () => {
                toast.create(STATUS_MESSAGE["201"], undefined, "success")
                await mutate()
            },
            onError: (e) => {
                if(e instanceof AxiosError) {
                    switch (e.response?.status) {
                        case 404:
                            return toast.create(STATUS_MESSAGE[e.response.status], undefined, "error")
                    }
                }
                return toast.create(STATUS_MESSAGE["default"], undefined, "error")
            }
        })
    }

    const handleClearErrorMessage = () => {
        setErrorMessage(undefined)
    }

    return {
        handler: handleDeleteTodo,
        isLoading: isMutating,
        error: {
            message: errorMessage,
            handleClear: handleClearErrorMessage
        }
    }
}