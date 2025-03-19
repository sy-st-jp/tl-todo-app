import React, {ReactNode} from "react";
import {Table as ChakraTable} from "@chakra-ui/react"
import {getKeys} from "./modules/getKeys";

type TableItemProps<T> = {
    cells: Record<keyof T, ReactNode>
    option?: ReactNode;
}

export const TableItem = <T,>(props: TableItemProps<T>) => {
    const { cells, option } = props;
    const keys = getKeys(cells);
    return (
        <ChakraTable.Row>
            {keys.map((key) => {
                return (
                    <ChakraTable.Cell key={key.toString()}>{cells[key]}</ChakraTable.Cell>
                );
            })}
            <ChakraTable.Cell>{option}</ChakraTable.Cell>
        </ChakraTable.Row>
    )
}
