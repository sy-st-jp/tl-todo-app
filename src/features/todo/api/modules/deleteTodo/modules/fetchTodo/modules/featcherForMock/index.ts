import {
    DeleteTodo,
} from "@/features/todo/api/types";

export const fetcherForMock: DeleteTodo = async (param) => {
    return {
        message: "Todo deleted",
    }
}
