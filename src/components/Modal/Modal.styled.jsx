import styled from 'styled-components';
export const Backdrop = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);`

export const ModalCard = styled.div`   
     position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 12px;
    width:280px`