import {Box, Dialog, Input, Portal, Spinner, Text} from "@chakra-ui/react";
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
        <Dialog.Root open={isOpen} onOpenChange={handleToggle} placement={"center"}>
            <Dialog.Trigger asChild>
                <WrappedButton variant={"solid"}>
                    新規作成
                </WrappedButton>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop/>
                <Dialog.Positioner>
                    <Dialog.Content p={8}>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} gap={6}>
                            <Dialog.Body>
                                <label>
                                    <Text mb={2}>タイトル</Text>
                                    <Input px={2} value={title} onChange={handleChangeTitle}/>
                                </label>
                            </Dialog.Body>
                            <Dialog.Footer display={"flex"} justifyContent={"center"} gap={8}>
                                <WrappedButton onClick={handleToggle}>キャンセル</WrappedButton>
                                <WrappedButton variant={"solid"} disabled={!title.length} onClick={handleClickCreateButton}>作成</WrappedButton>
                            </Dialog.Footer>
                            {isLoading && <Box position={"absolute"} top={0} right={0} left={0} bottom={0} bg={"whiteAlpha.300"} animationName={"fade-in"} animationDuration={"slow"} zIndex={1} display={"flex"} justifyContent={"center"} alignItems={"center"} cursor={"disabled"}><Spinner size="lg"/></Box>}
                            {error.message && <Text color={"fg.error"}>{error.message}</Text>}
                        </Box>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}