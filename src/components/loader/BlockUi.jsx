import React from 'react';
import PropTypes from 'prop-types';
import BlockUiComponent from 'react-block-ui';
import { Loader } from './Loader';

export const BlockUi = props => {
  return (
    <BlockUiComponent loader={<Loader color="#37526e" active/>} keepInView {...props}/>
  );
};

BlockUi.propTypes = {
  blocking: PropTypes.bool,
};

export default BlockUi;
