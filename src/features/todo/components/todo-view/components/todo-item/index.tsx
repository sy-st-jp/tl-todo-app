import {WrappedTableCell, WrappedTableRow} from "@/components/wrapped/chakra-ui/ui/table";
import React, {ChangeEvent, FC} from "react";
import {UpdateItemDialog} from "@/features/todo/components/todo-view/components/UpdateItemDialog";
import {Todo} from "@/features/todo/types/Todo";
import {UpdateConfig} from "@/features/todo/hooks/useTodo/modules/useUpdateTodo/type/UpdateConfig";

type Props = {
    todo: Todo
    updateTodo: {
        isLoading: boolean;
        error: {
            message?: string,
            handleClear: () => void
        },
        handler: (config: UpdateConfig) => Promise<void>;
    },
    deleteTodo: {
        isLoading: boolean;
        error: {
            message?: string,
            handleClear: () => void
        },
        handler: (id: number) => Promise<void>;
    }
}

export const TodoItem: FC<Props> = (props) => {
    const { todo, updateTodo } = props
    const { id, title, completed } = todo

    const handleCompleted = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            await updateTodo.handler({
                type: "completed",
                id: id,
                completed: e.target.checked
            })
        } catch (e) {
            // do nothing
        }
    }

    return (
        <WrappedTableRow>
            <WrappedTableCell>{id}</WrappedTableCell>
            <WrappedTableCell>{title}</WrappedTableCell>
            <WrappedTableCell>
                <input type="checkbox" checked={!!completed} onChange={handleCompleted}/>
            </WrappedTableCell>
            <UpdateItemDialog todo={todo} isLoading={updateTodo.isLoading} onClickUpdateButton={updateTodo.handler} error={updateTodo.error}/>
        </WrappedTableRow>
    )
}