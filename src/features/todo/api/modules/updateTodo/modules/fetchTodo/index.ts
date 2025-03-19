import {switchFetcher} from "@/libs/switchFetcher";
import {fetcherForProduction} from "./modules/fetcherForProduction";
import {UpdateTodo} from "@/features/todo/api/types";
import {fetcherForMock} from "@/features/todo/api/modules/updateTodo/modules/fetchTodo/modules/featcherForMock";

export const fetchTodo: UpdateTodo = (request, query) => {
    return switchFetcher(
        async() => await fetcherForProduction(request, query),
        async() => await fetcherForMock(request, query)
    );
}
