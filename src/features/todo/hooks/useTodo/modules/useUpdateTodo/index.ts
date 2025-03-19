import useSWRMutation from "swr/mutation";
import {
    UpdateTodoPathParam,
    UpdateTodoRequest,
    UpdateTodoResponse
} from "@/features/todo/api/types";
import {Todo} from "@/features/todo/types/Todo";
import {KeyedMutator} from "swr";
import {useState} from "react";
import {toast} from "@/components/ui/Toater";
import {updateTodo} from "@/features/todo/api/modules/updateTodo";
import {UpdateConfig} from "@/features/todo/hooks/useTodo/modules/useUpdateTodo/type/UpdateConfig";

export const useUpdateTodo = (data: Todo[]|undefined, mutate: KeyedMutator<Todo[]>) => {
    const [errorMessage, setErrorMessage] = useState<string>()

    const {trigger, isMutating, error} = useSWRMutation<UpdateTodoResponse, Error, "updateTodo", {request: UpdateTodoRequest, param: UpdateTodoPathParam}, UpdateTodoResponse>("updateTodo", async (key, {arg}) => {
        return await updateTodo(arg.request, arg.param)
    })

    const handleUpdateTodo = async (config: UpdateConfig) => {
        const {type} = config
        switch(type) {
            case "title":
                await trigger({request: {title: config.title}, param: {id: config.id}},{
                    onSuccess: async () => {
                        toast.create("タスクを更新しました", undefined, "success")
                        await mutate()
                    },
                    onError: () => {
                        setErrorMessage("タスクの更新に失敗しました。時間を置いて再度お試しください。")
                    }
                })
                break
            case "completed":
                const prevData: Todo[] | undefined = data
                const newData: Todo[] | undefined = data?.map(todo => {
                    if (todo.id === config.id) {
                        return {
                            ...todo,
                            completed: config.completed ? 1 : 0
                        }
                    }
                    return todo
                })

                await mutate(newData,false)

                await trigger({request: {completed: config.completed}, param: {id: config.id}},{
                    onError: () => {
                        toast.create("タスクの更新に失敗しました。時間を置いて再度お試しください。", undefined, "error")
                        mutate(prevData, false);
                    }
                })
                break
            case "all":
                await trigger({request: {title: config.title, completed: config.completed}, param: {id: config.id}})
                break
            default:
                const exhaustiveCheck: never = type
                throw new Error(`unhandled case: ${type}`)
        }
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