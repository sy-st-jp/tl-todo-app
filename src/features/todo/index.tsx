import {TodoView} from "./components/todo-view";
import {useTodo} from "./hooks/useTodo";

export const Todo = () => {
    const { todos, operations } = useTodo()
    return (
        <TodoView todos={todos} operations={operations} />
    )
}
