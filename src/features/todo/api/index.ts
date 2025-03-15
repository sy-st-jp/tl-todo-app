const todoFetcher = createFetchers(env.TODO_API_HOST)

// TODO: api client の責務を分割する
export const getTodos = async () => {
    const res = await todoFetcher.get<undefined, Response, Path>({
        path: "/api/todos",
    })
    return res.data
}
