import {switchFetcher} from "@/libs/switchFetcher";
import {fetcherForProduction} from "./modules/fetcherForProduction";
import {CreateTodo} from "@/features/todo/api/types";

export const fetchTodo: CreateTodo = (request) => {
    return switchFetcher(async() => { return await fetcherForProduction(request)});
}
