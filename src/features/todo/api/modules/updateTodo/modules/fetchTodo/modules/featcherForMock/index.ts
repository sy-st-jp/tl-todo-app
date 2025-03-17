import {
    UpdateTodo
} from "@/features/todo/api/types";

export const fetcherForMock: UpdateTodo = async (request, query) => {
    return {
        message: "Todo updated",
        id: query.id,
        changes: request.completed ? 1 : 0
    }
}
