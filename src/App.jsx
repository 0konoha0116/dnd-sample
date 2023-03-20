import React, {useState, useMemo} from 'react';
import {
  DndContext, 
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
  closestCenter,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { Item } from './item';

function App() {
  const [items, setItems] = useState([{
    id:1,
    name:"Sora",
  },
  {
    id:2,
    name:"Miko",
  },
  {
    id:3,
    name:"Suisei",
  },
  {
    id:4,
    name:"Roboco",
  },
  {
    id:5,
    name:"AZKi"
  }]);

   const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const itemIds = useMemo(() => items.map((item) => item.id), [items]);

  return (
      <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={items}
          strategy={verticalListSortingStrategy}
        >
          {items.map(item => <Item key={item.id} id={item.id} name={item.name}/>)}
        </SortableContext>
      </DndContext>
  );
  
  function handleDragEnd(event) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}


export default App;
