import {paths} from "@/features/todo/api/types/schema";
import {env} from "@/config/env";
import {createFetchers} from "@/libs/createFetchers";

const todoFetcher = createFetchers(env.TODO_API_HOST)

// TODO: レスポンスの型を取り出す utility type を作る
type Response = paths["/api/todos"]["get"]["responses"]["200"]["content"]["application/json"]
type Path = keyof paths

// TODO: api client の責務を分割する
export const getTodos = async () => {
    const res = await todoFetcher.get<undefined, Response, Path>({
        path: "/api/todos",
    })
    return res.data
}
