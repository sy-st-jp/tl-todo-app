import {WrappedTableCell, WrappedTableRow} from "@/components/wrapped/chakra-ui/ui/table";
import React, {FC} from "react";
import {UpdateItemDialog} from "@/features/todo/components/todo-view/components/UpdateItemDialog";
import {Todo} from "@/features/todo/types/Todo";

type Props = {
    todo: Todo
    updateTodo: {
        isLoading: boolean;
        error: {
            message?: string,
            handleClear: () => void
        },
        handler: (id: number, title?: string, completed?: boolean) => Promise<void>;
    }
}

export const TodoItem: FC<Props> = (props) => {
    const { todo, updateTodo } = props
    const { id, title, completed } = todo
    return (
        <WrappedTableRow>
            <WrappedTableCell>{id}</WrappedTableCell>
            <WrappedTableCell>{title}</WrappedTableCell>
            <WrappedTableCell>
                <input type="checkbox" checked={!!completed} readOnly/>
            </WrappedTableCell>
            <UpdateItemDialog todo={todo} isLoading={updateTodo.isLoading} onClickUpdateButton={updateTodo.handler} error={updateTodo.error}/>
        </WrappedTableRow>
    )
}