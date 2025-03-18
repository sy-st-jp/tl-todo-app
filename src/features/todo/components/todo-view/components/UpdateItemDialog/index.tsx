import {Dialog, Input, Portal, Spinner} from "@chakra-ui/react";
import {FC, useState} from "react";
import {Button} from "@/components/ui/button";
import {useInput} from "@/libs/useInput";
import {useOpen} from "@/libs/useOpen";
import {Todo} from "@/features/todo/types/Todo";
import {UpdateConfig} from "@/features/todo/hooks/useTodo/modules/useUpdateTodo/type/UpdateConfig";

type Props = {
    todo: Todo
    onClickUpdateButton:  (config: UpdateConfig) => Promise<void>
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
        <Dialog.Root open={isOpen} onOpenChange={handleToggle}>
            <Dialog.Trigger asChild>
                <Button>
                    編集
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop/>
                <Dialog.Positioner>
                    <Dialog.Content>
                        {isLoading ? <Spinner /> :
                            <>
                                <Dialog.Header/>
                                <Dialog.Body>
                                    <label>
                                        <p>タイトル</p>
                                        <Input value={currentTitle} onChange={handleChangeTitle}/>
                                    </label>
                                </Dialog.Body>
                                <Dialog.Footer>
                                    <Button onClick={handleToggle}>キャンセル</Button>
                                    <Button disabled={!currentTitle.length} onClick={handleClickUpdateButton}>更新</Button>
                                </Dialog.Footer>
                                {error.message && <p>{error.message}</p>}
                            </>}
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}