import { useRef } from "react";

import { Box, TextField, Button } from "@mui/material"


export default function Form({ add }) {
    const contentRef = useRef();
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                const content = contentRef.current.value;
                const name = nameRef.current.value;
                add(content, "Alice");
                e.currentTarget.reset();
            }}>
            <Box sx={{ mb: 4, textAlign: "right"}}></Box>
            <TextField
                inputRef={contentRef}
                type="text"
                placeholder="Content"
                fullWidth
                multiline
                sx={{ mb: 1 }}
            >
                <Button
                    variant="contained"
                    type="submit"
                >POST</Button>
            </TextField>
        </form>   
    )
}