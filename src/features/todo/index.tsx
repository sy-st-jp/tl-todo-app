import {TodoView} from "./components/todo-view";
import {useTodo} from "./hooks/useTodo";

export const Todo = () => {
    const { todos, errorMessage, isLoading, handleCreateTodo } = useTodo()

    if (errorMessage) return <div>{errorMessage}</div>
    if (!todos) return <div>タスクなし</div>

    return (
        <TodoView todos={todos} isLoading={isLoading} onClickCreateButton={handleCreateTodo} />
    )
}
