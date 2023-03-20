import React from "react";

interface draggableCardProps{
    children: string;
}

export function DraggableCard({children}: draggableCardProps){
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            margin:4,
            borderRadius:4,
            width:"150px",
            height:"150px",
            border:"1px solid black",
            backgroundColor:"white",
        }}>
            {children}
        </div>
    );
}

const items=["1","2","3","4","5","6","7","8"];
const contents = items.map((item) => ({
    id: item,
    content:<DraggableCard>{item.toString()}</DraggableCard>
}))