import {ChangeEventHandler, FC} from "react";
import {TextField} from "@/components/ui/TextField";

type Props = {
    title: string
    handleChangeTitle: ChangeEventHandler<HTMLInputElement>
}

export const TitleField: FC<Props> = (props) => {
    const {title, handleChangeTitle} = props
    return (
        <TextField label={"タイトル"} value={title} onChange={handleChangeTitle} />
    )
}
