import React,{useState,ReactElement} from "react";
import {Box,TextField} from "@mui/material";
import DragHandleIcon from "@material-ui/icons/DragHandle";

export function DraggableInputContainer(): ReactElement|null{
    const[items,setItems] = useState([
        {
            content:<TextField label='田中' variant="outlined" />,
        },
        {
            content:<TextField label='鈴木' variant="outlined" />,
        },
        {
            content:<TextField label='吉田' variant="outlined" />,
        },
    ]);

    return (
    <>
    {items.map(({content},i) => {
        return(
            <Box 
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="8px"
            key={`DraggableInputContainer-$[i]`}
            >
            {content}
            <DragHandleIcon />
            </Box>
        );
    })}
    </>
    );
}

