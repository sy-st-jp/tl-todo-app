import useSWR from "swr";
import {getTodos} from "../../api";
import {GetTodosResponse} from "../../api/types";

export const useTodo = () => {
    const { data, error, isLoading } = useSWR<GetTodosResponse>("getTodos", getTodos)
    return {
        data,
        error,
        isLoading
    }
}