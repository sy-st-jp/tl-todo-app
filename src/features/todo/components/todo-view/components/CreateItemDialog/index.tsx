import {CloseButton, Dialog, Input, Portal, Spinner} from "@chakra-ui/react";
import {FC} from "react";
import {WrappedButton} from "@/components/wrapped/chakra-ui/ui/button";
import {useInput} from "@/libs/useInput";
import {useOpen} from "@/libs/useOpen";

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

    const {value: title, handleChange: handleChangeTitle, handleClear: handleClearTitle} = useInput("")
    const { isOpen, handleToggle} = useOpen(() => {
        handleClearTitle()
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
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <WrappedButton variant="outline" size="sm">
                    新規作成
                </WrappedButton>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop/>
                <Dialog.Positioner>
                    <Dialog.Content>
                        {isLoading ? <Spinner /> :
                        <>
                            <Dialog.Header/>
                            <Dialog.Body>
                                <Input value={title} onChange={handleChangeTitle}/>
                            </Dialog.Body>
                            <Dialog.Footer>
                                <WrappedButton disabled={!title.length} onClick={handleClickCreateButton}>作成</WrappedButton>
                            </Dialog.Footer>
                            {error.message && <p>{error.message}</p>}
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                        </>}
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}