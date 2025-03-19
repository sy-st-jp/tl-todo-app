import {Column} from "@/components/ui/table";
import type {Todo} from "@/features/todo/types/Todo";

export const COLUMNS: Column<Todo>[] = [{
    key: "id",
    label: "ID"
}, {
    key: "title",
    label: "タイトル"
}, {
    key: "completed",
    label: "完了"
}]
