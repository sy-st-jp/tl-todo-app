import {useState} from "react";

export const useOpen = (callback?: () => void) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
        callback?.()
    }
    return {
        isOpen,
        handleToggle,
    }
}
