import {TodoView} from "./components/todo-view";
import {useTodo} from "./hooks/useTodo";

export const Todo = () => {
    const { data, error, isLoading } = useTodo()

    if (error) return <div>error</div>
    if (isLoading) return <div>loading...</div>
    if (!data) return <div>タスクなし</div>

    return (
        <TodoView todos={data} />
    )
}
