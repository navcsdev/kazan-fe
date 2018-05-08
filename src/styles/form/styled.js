import styled from 'styled-components';
import Grid from "material-ui/Grid/index";

const Container = styled.div`
    position: relative;
    max-width: 420px;
    width: 94%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    
    align-items: center;
    align-self: self-start;
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

const Error = styled.p`
  color: #f44336;
`;

const GridStyled = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  10px 0px 10px 12px;
`;

export {Container, LoginContent, Error, GridStyled};
