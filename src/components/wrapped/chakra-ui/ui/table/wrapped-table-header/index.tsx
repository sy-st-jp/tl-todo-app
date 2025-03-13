import {FC} from "react";
import {Table, TableHeaderProps} from "@chakra-ui/react";

type Props = TableHeaderProps

export const WrappedTableHeader: FC<Props> = ({children, ...props}) => {
    return (
        <Table.Header {...props}>
            {children}
        </Table.Header>
    )
}
