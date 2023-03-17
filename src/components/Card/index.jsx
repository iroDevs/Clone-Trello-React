import React, { useRef, useContext } from 'react';
import BoardContext from "../../context";
import { Container } from './styles';
import { MdCircle } from 'react-icons/md';
import { useDrag, useDrop } from 'react-dnd';



function Card({ data,index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);
  const [{isDragging}, dragRef] = useDrag({
    type: 'Card',
    item: {index,listIndex},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [,dropRef] = useDrop({
    accept:'Card',
    hover(item,monitor) {
      const draggedIndex = item.index;
      const targetIndex = index;

      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;
      
      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

     move(draggedListIndex, targetListIndex ,draggedIndex,targetIndex);

     item.index = targetIndex;
     item.listIndex = targetListIndex;
    }
  });
  
  dragRef(dropRef(ref))
  return (
    <Container ref={ref} isDragging={isDragging}>
        <header>
           {data.labels.map(label => <MdCircle size={12} key={label} color={label} /> )} 
            <p>{data.content}</p>
        </header>
    </Container>
  );
}

export default Card;