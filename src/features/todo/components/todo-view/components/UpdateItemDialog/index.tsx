import {FC, useState} from "react";
import {useInput} from "@/libs/useInput";
import {DialogWithButton} from "@/components/ui/DialogWithButton";
import {useOpen} from "@/libs/useOpen";
import {UpdateConfig} from "../../../../hooks/useTodo/modules/useUpdateTodo/type/UpdateConfig";
import {Todo} from "../../../../types/Todo";
import {TitleField} from "../shared/TitleField";

type Props = {
    todo: Todo
    onClickUpdateButton: (config: UpdateConfig) => Promise<void>
    isLoading: boolean
    error: {
        message?: string
        handleClear: () => void
    }
}

export const UpdateItemDialog: FC<Props> = (props) => {
    const { todo, onClickUpdateButton, isLoading, error } = props
    const { id, title } = todo

    const [initialTitle] = useState<string>(title)

    const {value: currentTitle, handleChange: handleChangeTitle, handleReset: handleResetTitle} = useInput(title)
    const { isOpen, handleToggle} = useOpen(() => {
        error.handleClear()
        handleResetTitle(initialTitle)
    })

    const handleClickUpdateButton = async () => {
        try {
            await onClickUpdateButton({
                type: "title",
                id: id,
                title: currentTitle
            })
            handleToggle()
        } catch (e) {
            // do nothing
        }
    }

    return (
        <DialogWithButton
            isOpen={isOpen}
            buttonLabel={"編集"}
            confirmLabel={"更新"}
            cancelLabel={"キャンセル"}
            onConfirm={handleClickUpdateButton}
            onToggleIsOpen={handleToggle}
            isConfirmable={title.length > 0}
            isLoading={isLoading}
            errorMessage={error.message}
        >
            <TitleField title={currentTitle} handleChangeTitle={handleChangeTitle} />
        </DialogWithButton>
    )
}