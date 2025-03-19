import {ChangeEventHandler, FC} from "react";
import {Text} from "@chakra-ui/react";
import {InputText} from "@/components/ui/InputText";

type Props = {
    label: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const TextField: FC<Props> = (props) => {
    const {label, ...inputTextProps} = props
    return (
        <label>
            <Text mb={2}>{label}</Text>
            <InputText {...inputTextProps}/>
        </label>
    )
}
