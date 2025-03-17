import {switchFetcher} from "@/libs/switchFetcher";
import {fetcherForProduction} from "./modules/fetcherForProduction";
import {CreateTodo} from "@/features/todo/api/types";
import {fetcherForMock} from "@/features/todo/api/modules/createTodo/modules/fetchTodo/modules/featcherForMock";

export const fetchTodo: CreateTodo = (request) => {
    return switchFetcher(
        async() => await fetcherForProduction(request),
        async() => await fetcherForMock(request)
    );
}
