import {Input, InputProps} from "@chakra-ui/react";
import {FC} from "react";

type Props = InputProps

export const WrappedInput: FC<Props> = ({children, ...props}) => {
    return (
        <Input {...props} />
    )
}
