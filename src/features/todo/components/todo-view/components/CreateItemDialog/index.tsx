import {CloseButton, Dialog, Input, Portal, Spinner} from "@chakra-ui/react";
import {ChangeEvent, FC, useState} from "react";
import {WrappedButton} from "@/components/wrapped/chakra-ui/ui/button";

type Props = {
    onClickCreateButton: (title: string) => void
    isLoading: boolean
    error: {
        message?: string
        handleClear: () => void
    }
}

export const CreateItemDialog: FC<Props> = (props) => {
    const [title, setTitle] = useState<string>("")
    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleClickCreateButton = () => {
        onClickCreateButton(title)
    const { onClickCreateButton, isLoading, error } = props
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