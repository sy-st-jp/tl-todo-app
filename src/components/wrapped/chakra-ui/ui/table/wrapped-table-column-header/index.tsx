import {FC} from "react";
import {Table, TableColumnHeaderProps} from "@chakra-ui/react";

type Props = TableColumnHeaderProps

export const WrappedTableColumnHeader: FC<Props> = ({children, ...props}) => {
    return (
        <Table.ColumnHeader {...props}>
            {children}
        </Table.ColumnHeader>
    )
}
