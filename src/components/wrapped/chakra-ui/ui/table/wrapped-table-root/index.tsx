import {FC} from "react";
import {Table, TableRootProps} from "@chakra-ui/react";

type Props = TableRootProps

export const WrappedTableRoot: FC<Props> = ({children, ...props}) => {
    return (
        <Table.Root {...props}>
            {children}
        </Table.Root>
    )
}
