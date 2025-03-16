import React, {FC} from "react";
import {
    WrappedTableBody,
    WrappedTableCell,
    WrappedTableColumnHeader,
    WrappedTableHeader,
    WrappedTableRoot,
    WrappedTableRow
} from "@/components/wrapped/chakra-ui/ui/table";
import type {Todo} from "../../types/Todo";
import {TodoItem} from "@/features/todo/components/todo-view/components/todo-item";

type Props = {
    todos: Todo[];
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
                {todos.length === 0 ? (
                    <WrappedTableRow>
                        <WrappedTableCell colSpan={3}>タスクなし</WrappedTableCell>
                    </WrappedTableRow>
                ) : todos.map((todo, index) => <TodoItem key={todo.id} {...todo} />)
                })
            </WrappedTableBody>
        </WrappedTableRoot>
    );
}
