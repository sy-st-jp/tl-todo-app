import {ChangeEvent, useState} from "react";

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState<string>(initialValue)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const handleReset = (value: string) => {
        setValue(value)
    }
    return {
        value,
        handleChange,
        handleReset,
    }
}
