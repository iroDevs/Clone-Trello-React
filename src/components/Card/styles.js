import styled ,{ css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #00685f;
  border-radius:5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.8);
  cursor: grab;
  border-top: 1px solid rgba(255, 255, 255, 0.4)


  header {
    position: absolute;
    top: -22px;
    left: 10px;
    
  }

  ${props => props.isDragging && css`
    border: 2px dashed rgba(232,232,232,0.5);
    padding-top: 31px;
    border-radius: 0;
    background:transparent;
    box-shadow: none;
    cursor: grabbing;

    p,img,header {
      opacity:0;
    }
  `}

  p {
    position: absolute;
    font-weight:500;
    line-height:20px;
    left: 50%;
    transform: translate(-50%, 0%);
  }

`;

/*
.color1 { #002e34 }; verde-escuro
.color2 { #004443 }; verde-escuor-poucoLeve
.color3 { #00755c }; verde-pouco-escuro
.color4 { #00c16c }; verde-quase-claro
.color5 { #90ff17 }; verde-claro
*/