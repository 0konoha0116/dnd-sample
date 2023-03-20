import React from 'react';
import {useDraggble} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

function Draggable(props){
    const{attributes, listners, setNodeRef, transform} = useDraggble({
        id:props.id,
    });
    const style ={
        transform: CSS.Translate.toString(transform),
    };

    return(
        <button ref={setNodeRef} style={style} {...listners} {...attributes}>
        {props.children}
        </button>
    )
}
