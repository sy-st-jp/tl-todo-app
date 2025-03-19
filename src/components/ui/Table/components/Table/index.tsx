import {Table as ChakraTable} from "@chakra-ui/react"
import {Column} from "./types/Column";
import {ReactNode} from "react";

type Props<T> = {
    columns: Column<T>[];
    data?: T[];
    isLoading?: boolean;
    renderItem: (data: T) => ReactNode;
    EmptyElement: ReactNode;
    LoadingElement: ReactNode;
};

export const Table = <T extends {id: string | number},>(props: Props<T>) => {
    const { columns, data, isLoading, renderItem, EmptyElement, LoadingElement } = props;
    if (isLoading) {
        return LoadingElement;
    }
    if (!data || data.length === 0) {
        return EmptyElement;
    }
    return (
        <ChakraTable.Root>
            <ChakraTable.Header>
                <ChakraTable.Row>
                    {columns.map((column) => {
                        return (
                            <ChakraTable.ColumnHeader key={column.key.toString()}>{column.label}</ChakraTable.ColumnHeader>
                        );
                    })}
                </ChakraTable.Row>
            </ChakraTable.Header>
            <ChakraTable.Body>
                {isLoading ? LoadingElement : data.map(renderItem)}
            </ChakraTable.Body>
        </ChakraTable.Root>
    )
}
