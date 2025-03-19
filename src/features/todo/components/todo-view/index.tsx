import {ChangeEvent, FC} from "react";
import {Table, TableItem} from "@/components/ui/table";
import {CreateItemDialog} from "@/features/todo/components/todo-view/components/CreateItemDialog";
import {UpdateConfig} from "@/features/todo/hooks/useTodo/modules/useUpdateTodo/type/UpdateConfig";
import {HStack, VStack} from "@/components/layout/Stack";
import {UpdateItemDialog} from "@/features/todo/components/todo-view/components/UpdateItemDialog";
import {Button} from "@/components/ui/Button";
import {Checkbox} from "@/components/ui/Checkbox";
import {COLUMNS} from "./const/COLUMNS";
import {Spinner} from "@chakra-ui/react";
import type {Todo} from "../../types/Todo";

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

    const handleCompleted = (id: number) => async (e: ChangeEvent<HTMLInputElement>) => {
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

    const handleDelete = (id: number) => async () => {
        try {
            await deleteTodo.handler(id)
        } catch (e) {
            // do nothing
        }
    }
    return (
        <VStack gap={24}>
            <CreateItemDialog isLoading={createTodo.isLoading} onClickCreateButton={createTodo.handler} error={createTodo.error}/>
            <Table
                columns={COLUMNS}
                data={todos}
                isLoading={getTodos.isLoading}
                EmptyElement={<p>タスクなし</p>}
                LoadingElement={<Spinner/>}
                renderItem={(todo) => (
                    <TableItem
                        cells={{
                            id: todo.id,
                            title: todo.title,
                            completed: <Checkbox checked={!!todo.completed} onChange={handleCompleted(todo.id)}/>
                        }}
                        option={
                            <HStack gap={24} justifyContent={"flex-end"}>
                                <UpdateItemDialog todo={todo} isLoading={updateTodo.isLoading} onClickUpdateButton={updateTodo.handler} error={updateTodo.error}/>
                                <Button variant={"danger"} onClick={handleDelete(todo.id)}>
                                    削除
                                </Button>
                            </HStack>
                        } />
                )}
            />
        </VStack>
    );
}
