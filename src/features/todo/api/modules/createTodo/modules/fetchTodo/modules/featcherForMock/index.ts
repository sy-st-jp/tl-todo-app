import {
    CreateTodo
} from "@/features/todo/api/types";

export const fetcherForMock: CreateTodo = async (request) => {
    return {
        title: request.title,
        id: Math.random(),
        completed: false,
    }
}
