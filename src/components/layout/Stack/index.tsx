import {FC, PropsWithChildren} from "react";
import {StackDirection} from "./types/StackDirection";
import {JustifyContent} from "./types/JustifyContent";
import {AlignItems} from "./types/AlignItems";

export type BaseProps = {
    direction: StackDirection,
    isReverse?: boolean,
    justifyContent?: JustifyContent
    alignItems?: AlignItems
    gap?: number
}

const BaseStack: FC<PropsWithChildren<BaseProps>> = (props) => {
    const {children, direction, isReverse, ...style} = props
    return (
        <div style={{
            display: "flex",
            flexDirection: isReverse ? `${direction}-reverse` : direction,
            ...style
        }}>
            {children}
        </div>
    )
}

type Props = Omit<BaseProps, "direction">

export const HStack: FC<PropsWithChildren<Props>> = ({children, ...props}) => {
    return (
        <BaseStack direction={"row"} {...props}>
            {children}
        </BaseStack>
    )
}

export const VStack: FC<PropsWithChildren<Props>> = ({children, ...props}) => {
    return (
        <BaseStack direction={"column"} {...props}>
            {children}
        </BaseStack>
    )
}
