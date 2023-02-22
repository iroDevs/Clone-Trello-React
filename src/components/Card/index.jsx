import React from 'react';
import { Container } from './styles';
import { MdCircle, MdLabel } from 'react-icons/md';



function Card() {
  return (
    <Container>
        <header>
            <MdCircle size={12} color='#90ff17' />
        </header>
    </Container>
  );
}

export default Card;