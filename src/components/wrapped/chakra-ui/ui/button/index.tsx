import {Button, ButtonProps} from "@chakra-ui/react";
import {FC} from "react";

type Props = ButtonProps

export const WrappedButton: FC<Props> = ({children, ...props}) => {
    return (
        <Button {...props}>{children}</Button>
    )
}
