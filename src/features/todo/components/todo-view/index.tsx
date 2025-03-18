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
import {CreateItemDialog} from "@/features/todo/components/todo-view/components/CreateItemDialog";
import {TodoItem} from "@/features/todo/components/todo-view/components/todo-item";
import {UpdateConfig} from "@/features/todo/hooks/useTodo/modules/useUpdateTodo/type/UpdateConfig";

type Props = {
    todos?: Todo[];
    operations: {
        getTodos: {
            isLoading: boolean;
            errorMessage?: string;
        },
        createTodo: {
            isLoading: boolean;
            error: {
              message?: string,
              handleClear: () => void
            },
            handler: (title: string) => Promise<void>;
        },
        updateTodo: {
            isLoading: boolean;
            error: {
              message?: string,
              handleClear: () => void
            },
            handler: (config: UpdateConfig) => Promise<void>;
        }
    }
}

export const TodoView: FC<Props> = (props) => {
    const { todos, operations } = props
    const { getTodos, createTodo, updateTodo } = operations
    return (
        <>
        <CreateItemDialog isLoading={createTodo.isLoading} onClickCreateButton={createTodo.handler} error={createTodo.error}/>
        {getTodos.isLoading ? <div>loading...</div> :
        <WrappedTableRoot>
            <WrappedTableHeader>
                <WrappedTableRow>
                    <WrappedTableColumnHeader>ID</WrappedTableColumnHeader>
                    <WrappedTableColumnHeader>タイトル</WrappedTableColumnHeader>
                    <WrappedTableColumnHeader>完了</WrappedTableColumnHeader>
                </WrappedTableRow>
            </WrappedTableHeader>
            <WrappedTableBody>
                {todos?.length === 0 || !todos ? (
                    <WrappedTableRow>
                        <WrappedTableCell colSpan={3}>タスクなし</WrappedTableCell>
                    </WrappedTableRow>
                ) : todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} />)
                }
            </WrappedTableBody>
        </WrappedTableRoot>}
        </>
    );
}
