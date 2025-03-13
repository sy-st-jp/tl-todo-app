import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {
    ColorModeProvider,
    type ColorModeProviderProps,
} from "@/app/provider/color-mode-provider"

export function Provider(props: ColorModeProviderProps) {
    return (
        <ChakraProvider value={defaultSystem}>
            <ColorModeProvider {...props} />
        </ChakraProvider>
    )
}
