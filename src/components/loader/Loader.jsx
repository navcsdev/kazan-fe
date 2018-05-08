import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import {LoaderStyled} from './LoaderStyled';

export class Loader extends Component {
  render() {
    const { active, size = 30, color = '#5e5f61' } = this.props;

    return (
      <LoaderStyled size={size} active={active}>
        <ReactLoading type='spin' color={color} height={size} width={size} delay={0} />
      </LoaderStyled>
    )
  }
}

Loader.propTypes = {
  active: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};

export default Loader;
