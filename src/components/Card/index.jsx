import React from 'react';
import { Container } from './styles';
import { MdCircle } from 'react-icons/md';
import { useDrag } from 'react-dnd';



function Card({ data }) {
  return (
    <Container>
        <header>
           {data.labels.map(label => <MdCircle size={12} key={label} color={label} /> )} 
            <p>{data.content}</p>
        </header>
    </Container>
  );
}

export default Card;