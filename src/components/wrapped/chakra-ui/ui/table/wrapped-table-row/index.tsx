import {FC} from "react";
import {Table, TableRowProps} from "@chakra-ui/react";

type Props = TableRowProps

export const WrappedTableRow: FC<Props> = ({children, ...props}) => {
    return (
        <Table.Row {...props}>
            {children}
        </Table.Row>
    )
}
