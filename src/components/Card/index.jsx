import React, { useRef } from 'react';
import { Container } from './styles';
import { MdCircle } from 'react-icons/md';
import { useDrag, useDrop } from 'react-dnd';



function Card({ data,index }) {
  const ref = useRef();
  const [{isDragging}, dragRef] = useDrag({
    type: 'Card',
    item: {index},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [,dropRef] = useDrop({
    accept:'Card',
    hover(item,monitor) {
      const draggedIndex = item.index;
      const targetIndex = index;
      
      if (draggedIndex === targetIndex) {
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

      console.log("muda a posição");
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