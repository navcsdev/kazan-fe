import styled from 'styled-components';

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

export {Container, LoginContent};
