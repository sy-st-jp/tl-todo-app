import React, {FC} from "react";
import {
    WrappedTableBody,
    WrappedTableCell,
    WrappedTableColumnHeader,
    WrappedTableHeader,
    WrappedTableRoot,
    WrappedTableRow
} from "@/components/wrapped/chakra-ui/ui/table";

type Todo = {
    id: number;
    title: string;
    completed: 0 | 1;
}

type Props = {
    todos: Todo[]
}

export const TodoView: FC<Props> = (props) => {
    const { todos } = props
    return (
        <WrappedTableRoot>
            <WrappedTableHeader>
                <WrappedTableRow>
                    <WrappedTableColumnHeader>ID</WrappedTableColumnHeader>
                    <WrappedTableColumnHeader>タイトル</WrappedTableColumnHeader>
                    <WrappedTableColumnHeader>完了</WrappedTableColumnHeader>
                </WrappedTableRow>
            </WrappedTableHeader>
            <WrappedTableBody>
                {todos.map((todo, index) => {
                    const { id, title, completed } = todo
                    return (
                        <WrappedTableRow key={index}>
                            <WrappedTableCell>{id}</WrappedTableCell>
                            <WrappedTableCell>{title}</WrappedTableCell>
                            <WrappedTableCell>
                                <input type="checkbox" checked={!!completed} readOnly/>
                            </WrappedTableCell>
                        </WrappedTableRow>
                    )
                })}
            </WrappedTableBody>
        </WrappedTableRoot>
    );
}
