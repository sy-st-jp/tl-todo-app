import {StatusMessage} from "@/features/todo/hooks/useTodo/shared/types/StatusMessage";

export const STATUS_MESSAGE: StatusMessage<201|404> = {
    201: "タスクを削除しました。",
    404: "削除対象のタスクが存在しません。解決しない場合はこちらにお問い合わせください。(https://example.com)",
    default: "タスクの削除に失敗しました。時間を置いて再度お試しください。解決しない場合はこちらにお問い合わせください。(https://example.com)"
}
