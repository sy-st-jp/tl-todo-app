import {ChangeEventHandler, FC} from "react";

type Props = {
    checked: boolean
    onChange: ChangeEventHandler
}

export const Checkbox: FC<Props> = (props) => {
    return (
        <input type={"checkbox"} {...props}/>
    )
}
