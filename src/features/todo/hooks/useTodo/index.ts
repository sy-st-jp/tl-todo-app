import useSWR from "swr";
import {getTodos} from "../../api";

export const useTodo = () => {
    const { data, error, isLoading } = useSWR("getTodos", getTodos)
    return {
        data,
        error,
        isLoading
    }
}