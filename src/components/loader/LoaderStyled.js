import styled from 'styled-components';

export const LoaderStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: ${props => props.active ? 'inline-block' : 'none'};
  margin-top: ${props => -props.size/2}px;
  margin-left: ${props => -props.size/2}px;
`;
