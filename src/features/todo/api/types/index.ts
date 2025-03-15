import {paths} from "@/features/todo/api/types/schema";

// TODO: レスポンスの型を取り出す utility type を作る
export type GetTodosResponse = paths["/api/todos"]["get"]["responses"]["200"]["content"]["application/json"]
export type GetTodos = () => Promise<GetTodosResponse>
export type Path = keyof paths