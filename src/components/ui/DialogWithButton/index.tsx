import {Box, Dialog as ChakraDialog, Portal, Spinner, Text} from "@chakra-ui/react";
import {FC, PropsWithChildren} from "react";
import {Button} from "@/components/ui/Button";
import {VStack} from "@/components/layout/Stack";
import {ButtonVariant} from "@/components/ui/Button/types/ButtonVariant";

type Props = {
    isOpen: boolean
    onToggleIsOpen: () => void
    onConfirm: () => {}
    isConfirmable: boolean
    isLoading: boolean
    errorMessage?: string
    buttonLabel: string,
    buttonVariant?: ButtonVariant
}

export const DialogWithButton: FC<PropsWithChildren<Props>> = (props) => {
    const { children, isOpen, buttonLabel, buttonVariant, onConfirm, onToggleIsOpen, isConfirmable, isLoading, errorMessage } = props
    return (
        <ChakraDialog.Root open={isOpen} onOpenChange={onToggleIsOpen} placement={"center"}>
            <Button variant={buttonVariant} onClick={onToggleIsOpen}>
                {buttonLabel}
            </Button>
            <Portal>
                <ChakraDialog.Backdrop/>
                <ChakraDialog.Positioner>
                    <ChakraDialog.Content p={8}>
                        <VStack gap={24}>
                            <ChakraDialog.Body>
                                {children}
                            </ChakraDialog.Body>
                            <ChakraDialog.Footer display={"flex"} justifyContent={"center"} gap={8}>
                                <Button onClick={onToggleIsOpen}>キャンセル</Button>
                                <Button variant={"solid"} disabled={!isConfirmable} onClick={onConfirm}>作成</Button>
                            </ChakraDialog.Footer>
                            {isLoading && <Box position={"absolute"} top={0} right={0} left={0} bottom={0} bg={"whiteAlpha.300"} animationName={"fade-in"} animationDuration={"slow"} zIndex={1} display={"flex"} justifyContent={"center"} alignItems={"center"} cursor={"disabled"}><Spinner size="lg"/></Box>}
                            {errorMessage && <Text color={"fg.error"}>{errorMessage}</Text>}
                        </VStack>
                    </ChakraDialog.Content>
                </ChakraDialog.Positioner>
            </Portal>
        </ChakraDialog.Root>
    )
}