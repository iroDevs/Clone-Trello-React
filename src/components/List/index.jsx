import React, { useRef, useContext } from 'react';
import BoardContext from "../../context";
import { useDrag, useDrop } from 'react-dnd';
import { Container } from './styles';
import {MdAdd} from 'react-icons/md'
import Card from '../Card';

function List({ data, index: listIndex }) {
  const ref = useRef();
  const { moveList } = useContext(BoardContext);
  const [{isDragging}, dragRef] = useDrag({
    type: 'Card',
    item: {data,listIndex},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [,dropRef] = useDrop({
    accept:'Card',
    hover(item,monitor) {
      const draggedListIndex = item.listIndex; //lista que eu estou
      const targetListIndex = listIndex; // lista para onde eu vou

      if ( draggedListIndex === targetListIndex )
        return;

     

      moveList(draggedListIndex , targetListIndex , item.index)
    }

  })

  dragRef(dropRef(ref))
  return (
    <Container done={data.done} ref={ref} isDragging={isDragging}>
        <header>
            <h2>{data.title}</h2>
            { data.creatable && 
            (<button type='button'>
                <MdAdd size={24} color='#00c16c' />
            </button>)
            }
        </header>
   

    <ul>
        {data.cards.map((card,index) => <Card key={card.id} listIndex={listIndex} index={index} data={card} />)}
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