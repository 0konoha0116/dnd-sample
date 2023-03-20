import React from "react";
import { useSortable } from '@dnd-kit/sortable';
import FolderIcon from '@mui/icons-material/Folder';
import { CSS } from '@dnd-kit/utilities';
import {ListItem, ListItemText, ListItemIcon} from '@mui/material';

export function Item(props){
    const {
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id : props.id});

    const style ={
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...listeners}>
            <ListItem><ListItemIcon><FolderIcon /></ListItemIcon><ListItemText primary={props.name} /></ListItem>
        </div>
    );
}