import {TodoView} from "./components/todo-view";
import {useTodo} from "./hooks/useTodo";

export const Todo = () => {
    const { todos, errorMessage, isLoading } = useTodo()

    if (errorMessage) return <div>{errorMessage}</div>
    if (isLoading) return <div>loading...</div>
    if (!todos) return <div>タスクなし</div>

    return (
        <TodoView todos={todos} />
    )
}
