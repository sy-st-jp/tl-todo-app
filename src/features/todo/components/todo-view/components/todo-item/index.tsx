import {WrappedTableCell, WrappedTableRow} from "@/components/wrapped/chakra-ui/ui/table";
import React, {FC} from "react";
import {Todo} from "@/features/todo/types/Todo";

type Props = {
    todo: Todo
}

export const TodoItem: FC<Props> = (props) => {
    const { id, title, completed } = props
    return (
        <WrappedTableRow>
            <WrappedTableCell>{id}</WrappedTableCell>
            <WrappedTableCell>{title}</WrappedTableCell>
            <WrappedTableCell>
                <input type="checkbox" checked={!!completed} readOnly/>
            </WrappedTableCell>
        </WrappedTableRow>
    )
}