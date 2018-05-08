import React from 'react';
import Button from "material-ui/Button";
import styled from "styled-components";
import { darken, lighten } from 'polished';
import Loader from '../components/loader';

const map = {
  'default': '#507aa5',
  'google': '#d04437',
  'facebook': '#214496'
};

const get = color => {
  return map[color] || map['default'];
};

const LoadingButton = ({loading, children, color, ...rest}) => {
  return (
    <Button {...rest}>
      {loading ?
        <Loader active color="white" size={20}/>:
        children
      }
    </Button>
  )
};

export const Default = styled(LoadingButton)`
  height: 50px;
  border-radius: 6px;
  font-size: 18px;
  background-color: ${props => get(props.color)};
  border: none;
  color: white;
  position: relative;
  &&:hover {
    background-color: ${props => lighten(0.04, get(props.color))};
  }
  &&:active {
    background-color: ${props => darken(0.06, get(props.color))} !important;
  }
  &&:focus {
    box-shadow: none !important;
  }
`;

export const Outline = styled(LoadingButton)`
  height: 50px;
  border-radius: 6px;
  font-size: 18px;
  border: 2px solid ${props => get(props.color)};
  background-color: white;
  color: ${props => get(props.color)};
  position: relative;
  &&:hover {
    border-color: ${props => get(props.color)};
    background-color: ${props => get(props.color)};
    color: white;
  }
  &&&:active {
    border-color: ${props => darken(0.06, get(props.color))};
    background-color: ${props => darken(0.06, get(props.color))};
    color: white;
  }
  &&&&:focus {
    box-shadow: none;
  }
`;
