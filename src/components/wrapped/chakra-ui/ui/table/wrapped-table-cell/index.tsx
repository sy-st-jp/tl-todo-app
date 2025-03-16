import {FC} from "react";
import {Table, TableCellProps } from "@chakra-ui/react";

type Props = TableCellProps

export const WrappedTableCell: FC<Props> = ({children, ...props}) => {
    return (
        <Table.Cell {...props}>
            {children}
        </Table.Cell>
    )
}
