import {StatusMessage} from "@/features/todo/hooks/useTodo/shared/types/StatusMessage";

export const STATUS_MESSAGE: StatusMessage<201|400> = {
    201: "タスクを作成しました。",
    400: "タイトルを入力してください。",
    default: "タスクの作成に失敗しました。時間を置いて再度お試しください。解決しない場合はこちらにお問い合わせください。(https://example.com)"
}
