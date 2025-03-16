import {FC} from "react";
import {Table, TableBodyProps} from "@chakra-ui/react";

type Props = TableBodyProps

export const WrappedTableBody: FC<Props> = ({children, ...props}) => {
    return (
        <Table.Body {...props}>
            {children}
        </Table.Body>
    )
}
