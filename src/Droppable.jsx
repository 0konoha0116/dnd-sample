import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
    const {idOver, setNodeRef} = useDroppable ({
        id: props.id,
    });
    const style ={
        opacity: isOVer ? 1:0.5,
    };

    return(
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    )
}