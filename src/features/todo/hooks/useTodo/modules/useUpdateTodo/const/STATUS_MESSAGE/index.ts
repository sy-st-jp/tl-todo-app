import {StatusMessage} from "@/features/todo/hooks/useTodo/shared/types/StatusMessage";

export const STATUS_MESSAGE: StatusMessage<200|400|404> = {
    200: "タスクを更新しました。",
    400: "入力値が不正です。",
    404:　"編集対象のタスクが存在しません。解決しない場合はこちらにお問い合わせください。(https://example.com)",
    default: "タスクの更新に失敗しました。時間を置いて再度お試しください。解決しない場合はこちらにお問い合わせください。(https://example.com)",
}
