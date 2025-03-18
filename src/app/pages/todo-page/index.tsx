import React from "react";
import {Box} from "@chakra-ui/react";
import {Todo} from "@/features/todo";

export const TodoPage = () => {
    return (
        <Box p="8" maxW={"1000px"} textAlign={"center"} margin={"auto"}>
            <Todo />
        </Box>
    )
};
