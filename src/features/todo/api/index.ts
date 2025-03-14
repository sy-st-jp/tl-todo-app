import {createFetcher} from "@/libs/createFetcher";
import {paths} from "@/features/todo/api/types/schema";
import {env} from "@/config/env";

const todoFetcher = createFetcher(env.TODO_API_HOST)

// TODO: レスポンスの型を取り出す utility type を作る
type Response = paths["/api/todos"]["get"]["responses"]["200"]["content"]["application/json"]
type Path = keyof paths

export const getTodos = () => {
    return todoFetcher.get<undefined, Response, Path>({
        path: "/api/todos",
    })
}
