import {FC} from "react";
import {useInput} from "@/libs/useInput";
import {DialogWithButton} from "@/components/ui/DialogWithButton";
import {useOpen} from "@/libs/useOpen";
import {InputText} from "@/components/ui/InputText";
import {Text} from "@chakra-ui/react";

type Props = {
    onClickCreateButton: (title: string) => Promise<void>
    isLoading: boolean
    error: {
        message?: string
        handleClear: () => void
    }
}

export const CreateItemDialog: FC<Props> = (props) => {
    const { onClickCreateButton, isLoading, error } = props

    const {value: title, handleChange: handleChangeTitle, handleReset: handleResetTitle} = useInput("")
    const { isOpen, handleToggle} = useOpen(() => {
        handleResetTitle("")
        error.handleClear()
    })

    const handleClickCreateButton = async () => {
        try {
            await onClickCreateButton(title)
            handleToggle()
        } catch (e) {
            // do nothing
        }
    }
    return (
        <DialogWithButton
            isOpen={isOpen}
            buttonLabel={"新規作成"}
            buttonVariant={"solid"}
            onConfirm={handleClickCreateButton}
            onToggleIsOpen={handleToggle}
            isConfirmable={title.length > 0}
            isLoading={isLoading}
            errorMessage={error.message}
        >
            <label>
                <Text mb={2}>タイトル</Text>
                <InputText value={title} onChange={handleChangeTitle}/>
            </label>
        </DialogWithButton>
    )
}