import styled from 'styled-components';
import Grid from "material-ui/Grid";

const Container = styled.div`
    position: relative;
    max-width: 420px;
    width: 94%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 14px;
  padding: 35px 35px 20px;
  border: solid 1px $gray-400;
  font-size: 14px;
  max-width: 94%;
  border-radius: 10px;
  background-color: #fff;
`;

const GridStyled = styled(Grid)`
  display: flex;
  justify-content: space-between;
  padding: 10px 12px 10px;
`;


export {Container, LoginContent, GridStyled};
