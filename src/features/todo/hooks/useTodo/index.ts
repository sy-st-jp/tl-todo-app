import useSWR from "swr";
import {getTodos} from "@/features/todo/api";

export const useTodo = () => {
    const { data, error, isLoading } = useSWR("getTodos", getTodos)
    return {
        data,
        error,
        isLoading
    }
}