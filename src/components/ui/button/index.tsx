import {Button} from "@chakra-ui/react";
import {FC, PropsWithChildren} from "react";
import {ButtonSize} from "./const/BUTTON_SIZE/types/ButtonSize";
import {ButtonVariant} from "./types/ButtonVariant";
import {BUTTON_SIZE} from "./const/BUTTON_SIZE";

type Props = {
    size?: ButtonSize,
    variant?: ButtonVariant
    disabled?: boolean,
    onClick?: () => void
}

export const WrappedButton: FC<PropsWithChildren<Props>> = (props) => {
    const {children, size = "md", variant = "outline", disabled, onClick} = props
    return (
        <Button
            width={BUTTON_SIZE[size]}
            variant={variant === "danger" ? "outline" : variant}
            borderColor={variant === "danger" ? "red.800" : undefined}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}
