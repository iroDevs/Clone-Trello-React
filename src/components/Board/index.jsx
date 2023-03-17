import React, { useState } from 'react';
import { loadLists } from '../../services/FakeApi'
import { Container } from './styles';
import produce from 'immer';
import BoardContext from "../../context";

import List from '../List';


const data = loadLists();


function Board() {
  const [ list , setList ] = useState(data);

  function move(fromList, toList ,from, to) {
    setList(produce(list,draft => {
      const dragged = draft[fromList].cards[from];
      draft[fromList].cards.splice(from,1);
      draft[toList].cards.splice(to,0,dragged);
    }))

  }

  function moveList(fromList,toList,fromIndex)
  {
    setList(produce(list,draft => {
      const dragged = draft[fromList].cards[fromIndex];
      draft[fromList].cards.splice(fromIndex,1);
      draft[toList].cards.push(dragged);
    }))
  }

  return (
    <BoardContext.Provider value={{list,move,moveList}}>
    <Container>
       {list.map((list,index) => <List key={list.title} index={index} data={list} />)}
    </Container>
   </ BoardContext.Provider>
  );
}

export default Board;