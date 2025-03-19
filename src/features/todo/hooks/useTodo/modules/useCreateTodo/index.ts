import useSWRMutation from "swr/mutation";
import {CreateTodoRequest, CreateTodoResponse} from "@/features/todo/api/types";
import {createTodo} from "@/features/todo/api";
import {Todo} from "@/features/todo/types/Todo";
import {KeyedMutator} from "swr";
import {useState} from "react";
import {toast} from "@/components/ui/Toater";
import {AxiosError} from "axios";
import {STATUS_MESSAGE} from "@/features/todo/hooks/useTodo/modules/useCreateTodo/const/STATUS_MESSAGE";

export const useCreateTodo = (mutate: KeyedMutator<Todo[]>) => {
    const [errorMessage, setErrorMessage] = useState<string>()

    const {trigger, isMutating, error} = useSWRMutation<CreateTodoResponse, Error, "createTodo", CreateTodoRequest, CreateTodoResponse>("createTodo", async (key, {arg}) => {
        return await createTodo(arg)
    }, {
        onSuccess: async () => {
            toast.create(STATUS_MESSAGE["201"], undefined, "success")
            await mutate()
        },
        onError: (e) => {
            if(e instanceof AxiosError) {
                switch (e.response?.status) {
                    case 400:
                        return setErrorMessage(STATUS_MESSAGE[e.response.status])
                }
            }
            return setErrorMessage(STATUS_MESSAGE["default"])
        }
    })
    const handleCreateTodo = async (title: string) => {
        await trigger({title})
    }

    const handleClearErrorMessage = () => {
        setErrorMessage(undefined)
    }

    return {
        handler: handleCreateTodo,
        isLoading: isMutating,
        error: {
            message: errorMessage,
            handleClear: handleClearErrorMessage
        }
    }
}