import React, {FC} from "react";
import {
    WrappedTableBody,
    WrappedTableCell,
    WrappedTableColumnHeader,
    WrappedTableHeader,
    WrappedTableRoot,
    WrappedTableRow
} from "@/components/wrapped/chakra-ui/ui/table";

type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

type Props = {
    todos: Todo[]
}

export const TodoView: FC<Props> = (props) => {
    const { todos } = props
    return (
        <WrappedTableRoot>
            <WrappedTableHeader>
                <WrappedTableRow>
                    <WrappedTableColumnHeader>ID</WrappedTableColumnHeader>
                    <WrappedTableColumnHeader>タイトル</WrappedTableColumnHeader>
                    <WrappedTableColumnHeader>完了</WrappedTableColumnHeader>
                </WrappedTableRow>
            </WrappedTableHeader>
            <WrappedTableBody>
                {data.map((item, index) => (
                    <WrappedTableRow key={index}>
                        <WrappedTableCell>{item.id}</WrappedTableCell>
                        <WrappedTableCell>{item.title}</WrappedTableCell>
                        <WrappedTableCell>
                            <input type="checkbox" checked={item.completed} readOnly/>
                        </WrappedTableCell>
                    </WrappedTableRow>
                ))}
            </WrappedTableBody>
        </WrappedTableRoot>
    );
}
