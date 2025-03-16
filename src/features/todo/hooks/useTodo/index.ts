import {useEffect, useState} from "react";
import {Todo} from "../../types/Todo";
import {createTodo, getTodos} from "../../api";

export const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [errorMessage, setErrorMessage] = useState<string|null>(null)

    const handleGetTodos = async () => {
        setIsLoading(true)
        const todos = await getTodos();
        setTodos(todos)
        setIsLoading(false)
    }

    const handleCreateTodo = async (title: string) => {
        setIsLoading(true)
        await createTodo({title})
        await handleGetTodos()
        setIsLoading(false)
    }

    useEffect(() => {
        handleGetTodos()
    },[])

    return {
        todos,
        isLoading,
        errorMessage,
        handleCreateTodo
    }
}