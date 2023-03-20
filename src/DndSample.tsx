import {DndContext} from "@dnd-kit/core";
import {arrayMove,SortableContext,useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import React,{ReactElement,useState,useCallback} from "React";
import Draggable from "./DraggableCard";

//移動用のコンポーネントをD&D可能にする
export const Dndsample = (): JSX.Element =>{
    const[state,setState]=
    useState<{id: String,content: ReactElement}[]>(contents)
    const handleDragEnd = useCallback(
        (event) => {
            const{active,over}=event;
            if(over === null){
                return;
            }
            if(active.id !== over.id){
                const oldIndex = state
                .map((item) => {
                    return item.id;
                })
                .indexOf(active.id);
                const newIndex = state
                .map((item) => {
                    return item.id;
                })
                .indexOf(over.id);
                const newState = arrayMove(state,oldIndex,newIndex);
                setState(newState);
            }
        },
        [state]
    );

    return(
        <DndContext onDragEnd={handleDragEnd}>
            <SortableContext items={state}>
                <div style={{display: "flex",flexWrap:"Wrap"}}>
                    {state.map((item) => (
                        <SortableItem key={item.id} id={item.id}>
                            {item.content}
                        </SortableItem>
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    )
}

interface SortableItemProps {
    id: string;
    children: ReactElement;
}

//移動用コンポーネントの作成
function SortableItem({id,children}:SortableItemProps){
    const{attributes,listeners,setNodeRef,transform,transition} = useSortable({id});
    const style = {transform:CSS.Transform.toString(transform),transition
    };
    return(
        <div ref={setNodeRef} style={style}{...attributes}{...listeners}>
        {children}
        </div>
    );
}
