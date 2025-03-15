import {GetTodos} from "@/features/todo/api/types";

export const fetcherForMock: GetTodos = async () => {
    return [{
        id: 1,
        title: "mock1",
        completed: 0
    },{
        id: 2,
        title: "mock2",
        completed: 1
    },{
        id: 3,
        title: "mock3",
        completed: 0
    }]
}
