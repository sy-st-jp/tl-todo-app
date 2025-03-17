import useSWRMutation from "swr/mutation";
import {
    UpdateTodoPathParam,
    UpdateTodoRequest,
    UpdateTodoResponse
} from "@/features/todo/api/types";
import {Todo} from "@/features/todo/types/Todo";
import {KeyedMutator} from "swr";
import {useState} from "react";
import {toast} from "@/components/ui/toater";
import {updateTodo} from "@/features/todo/api/modules/updateTodo";

export const useUpdateTodo = (mutate: KeyedMutator<Todo[]>) => {
    const [errorMessage, setErrorMessage] = useState<string>()

    const {trigger, isMutating, error} = useSWRMutation<UpdateTodoResponse, Error, "updateTodo", {request: UpdateTodoRequest, param: UpdateTodoPathParam}, UpdateTodoResponse>("updateTodo", async (key, {arg}) => {
        return await updateTodo(arg.request, arg.param)
    }, {
        onSuccess: async () => {
            toast.create("タスクを更新しました", undefined, "success")
            await mutate()
        },
        onError: () => {
            setErrorMessage("タスクの更新に失敗しました。時間を置いて再度お試しください。")
        }
    })
    const handleUpdateTodo = async (id: number, title?: string, completed?: boolean) => {
        await trigger({request: {title, completed}, param: {id}})
    }

    const handleClearErrorMessage = () => {
        setErrorMessage(undefined)
    }

    return {
        handler: handleUpdateTodo,
        isLoading: isMutating,
        error: {
            message: errorMessage,
            handleClear: handleClearErrorMessage
        }
    }
}