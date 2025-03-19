import React from "react";
import {Todo} from "@/features/todo";

export const TodoPage = () => {
    return (
        <div style={{
            padding: 24,
            maxWidth: "1000px",
            textAlign: "center",
            margin: "auto"
        }}>
            <Todo />
        </div>
    )
};
