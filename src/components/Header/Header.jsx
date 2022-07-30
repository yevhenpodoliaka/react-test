import styled from 'styled-components';
export default function Header({onClick}) {
    return <HeaderItem>
        <Button onClick={onClick}>Todos</Button>
        <Button onClick={onClick}>News</Button>
        <Button onClick={onClick}>Images</Button>
    </HeaderItem>
};
 const HeaderItem = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:12px;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`
const Button= styled.button`
    padding:0;
    margin:0;
    border:transparent;
    background-color:transparent;
    color:white;
`