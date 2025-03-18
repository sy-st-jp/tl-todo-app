import {switchFetcher} from "@/libs/switchFetcher";
import {DeleteTodo} from "@/features/todo/api/types";
import {
    fetcherForProduction
} from "@/features/todo/api/modules/deleteTodo/modules/fetchTodo/modules/fetcherForProduction";
import {fetcherForMock} from "@/features/todo/api/modules/deleteTodo/modules/fetchTodo/modules/featcherForMock";

export const fetchTodo: DeleteTodo = (param) => {
    return switchFetcher(
        async() => await fetcherForProduction(param),
        async() => await fetcherForMock(param)
    );
}
