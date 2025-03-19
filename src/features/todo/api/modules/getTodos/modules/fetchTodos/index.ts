import {switchFetcher} from "@/libs/switchFetcher";
import {fetcherForMock} from "./modules/fetcherForMock";
import {fetcherForProduction} from "./modules/fetcherForProduction";
import {GetTodos} from "@/features/todo/api/types";

export const fetchTodos: GetTodos = () => {
    return switchFetcher(fetcherForProduction, fetcherForMock)
}
