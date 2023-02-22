import React from 'react';

import { Container } from './styles';
import {MdAdd} from 'react-icons/md'
import Card from '../Card';

function List() {
  return (
    <Container>
        <header>
            <h2>Lista</h2>
            <button type='button'>
                <MdAdd size={24} color='#00c16c' />
            </button>
        </header>
   

    <ul>
        <Card />
    </ul>
    </Container>
  );
}

export default List;


/*
.color1 { #002e34 }; verde-escuro
.color2 { #004443 }; verde-escuor-poucoLeve
.color3 { #00755c }; verde-pouco-escuro
.color4 { #00c16c }; verde-quase-claro
.color5 { #90ff17 }; verde-claro
*/