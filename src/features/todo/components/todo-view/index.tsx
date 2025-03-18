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
import {VStack} from "@/components/layout/Stack";

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
}

export const TodoView: FC<Props> = (props) => {
    const { todos, operations } = props
    const { getTodos, createTodo, updateTodo, deleteTodo } = operations
    return (
        <VStack gap={24}>
            <CreateItemDialog isLoading={createTodo.isLoading} onClickCreateButton={createTodo.handler} error={createTodo.error}/>
            {getTodos.isLoading ? <div>loading...</div> :
            <WrappedTableRoot>
                <WrappedTableHeader>
                    <WrappedTableRow>
                        <WrappedTableColumnHeader w={"20%"} fontWeight="bold">ID</WrappedTableColumnHeader>
                        <WrappedTableColumnHeader w={"20%"} fontWeight="bold">タイトル</WrappedTableColumnHeader>
                        <WrappedTableColumnHeader w={"10%"} fontWeight="bold">完了</WrappedTableColumnHeader>
                        <WrappedTableColumnHeader/>
                    </WrappedTableRow>
                </WrappedTableHeader>
                <WrappedTableBody>
                    {todos?.length === 0 || !todos ? (
                        <WrappedTableRow>
                            タスクなし
                        </WrappedTableRow>
                    ) : todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)
                    }
                </WrappedTableBody>
            </WrappedTableRoot>}
        </VStack>
    );
}
