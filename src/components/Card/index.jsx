import React from 'react';
import { Container } from './styles';
import { MdCircle } from 'react-icons/md';
import { useDrag } from 'react-dnd';



function Card({ data }) {
  const [{isDragging}, dragRef] = useDrag({
    type: 'Card',
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  
  return (
    <Container ref={dragRef} isDragging={isDragging}>
        <header>
           {data.labels.map(label => <MdCircle size={12} key={label} color={label} /> )} 
            <p>{data.content}</p>
        </header>
    </Container>
  );
}

export default Card;