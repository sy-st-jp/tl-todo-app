import {TodoView} from "./components/todo-view";

const data = [{
    id: 1,
    title: "タスク1",
    completed: false
}, {
    id: 2,
    title: "タスク2",
    completed: true
}, {
    id: 3,
    title: "タスク3",
    completed: true
}]

export const Todo = () => {
    return (
        <TodoView data={data} />
    )
}
