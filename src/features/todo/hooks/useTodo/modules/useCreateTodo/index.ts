import useSWRMutation from "swr/mutation";
import {CreateTodoRequest, CreateTodoResponse} from "@/features/todo/api/types";
import {createTodo} from "@/features/todo/api";
import {Todo} from "@/features/todo/types/Todo";
import {KeyedMutator} from "swr";
import {useState} from "react";
import {toast} from "@/components/ui/Toater";

export const useCreateTodo = (mutate: KeyedMutator<Todo[]>) => {
    const [errorMessage, setErrorMessage] = useState<string>()

    const {trigger, isMutating, error} = useSWRMutation<CreateTodoResponse, Error, "createTodo", CreateTodoRequest, CreateTodoResponse>("createTodo", async (key, {arg}) => {
        return await createTodo(arg)
    }, {
        onSuccess: async () => {
            toast.create("タスクを作成しました", undefined, "success")
            await mutate()
        },
        onError: () => {
            setErrorMessage("タスクの作成に失敗しました。時間を置いて再度お試しください。")
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