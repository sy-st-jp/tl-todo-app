type UpdateTitle = {
    type: "title",
    id: number,
    title: string
}

type UpdateCompleted = {
    type: "completed",
    id: number,
    completed: boolean
}

type UpdateAll = {
    type: "all",
    id: number,
    title: string,
    completed: boolean
}

export type UpdateConfig = UpdateTitle | UpdateCompleted | UpdateAll
