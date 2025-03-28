import {paths} from "@/features/todo/api/types/schema";

// TODO: レスポンスの型を取り出す utility type を作る
export type GetTodosResponse = paths["/api/todos"]["get"]["responses"]["200"]["content"]["application/json"]
export type GetTodos = () => Promise<GetTodosResponse>

export type CreateTodoRequest = paths["/api/todos"]["post"]["requestBody"]["content"]["application/json"]
export type CreateTodoResponse = paths["/api/todos"]["post"]["responses"]["201"]["content"]["application/json"]
export type CreateTodo = (request: CreateTodoRequest) => Promise<CreateTodoResponse>

export type UpdateTodoRequest = paths["/api/todos"]["put"]["requestBody"]["content"]["application/json"]
export type UpdateTodoPathParam = paths["/api/todos"]["put"]["parameters"]["path"]
export type UpdateTodoResponse = paths["/api/todos"]["put"]["responses"]["200"]["content"]["application/json"]
export type UpdateTodo = (request: UpdateTodoRequest, param: UpdateTodoPathParam) => Promise<UpdateTodoResponse>

export type DeleteTodoPathParam = paths["/api/todos"]["delete"]["parameters"]["path"]
export type DeleteTodoResponse = paths["/api/todos"]["delete"]["responses"]["200"]["content"]["application/json"]
export type DeleteTodo = (param: DeleteTodoPathParam) => Promise<DeleteTodoResponse>

export type Path = keyof paths