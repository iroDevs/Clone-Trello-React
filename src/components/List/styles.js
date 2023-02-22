import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  & + div {
    border-left: 2px solid rgba(0,0,0,0.3);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    h2 {
        font-weight: 500;
        font-size: 16px;
        padding: 0 10px;
    }

    button {
        width: 40px;
        height: 40px;
        border-radius: 15px;
        background-color: #fff;
        border:0;
        cursor: pointer;
        display:flex;
        justify-content: center;
        align-items: center;
        transition:0.3s ease-in-out;
    }

    button:hover {
        
        background-color: #000;
    }
  }
`;
