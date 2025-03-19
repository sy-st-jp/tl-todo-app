import {Input} from "@chakra-ui/react";
import {ChangeEventHandler, FC} from "react";

type Props = {
    value: string
    onChange: ChangeEventHandler
}

export const InputText: FC<Props> = (props) => {
    return (
        <Input
            type={"text"}
            px={2}
            {...props}
        />
    )
}
