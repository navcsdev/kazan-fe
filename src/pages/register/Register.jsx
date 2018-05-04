import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';

const mapDispatch = ({ register: { registerAsync }}) => ({registerAsync})

class Register extends PureComponent {
  handleSubmit = (data) => {
    return this.props.registerAsync(data);
  };

  render() {
    return (
      <RegisterForm onSubmit={this.handleSubmit}/>
    );
  }
}

export default connect(null, mapDispatch)(Register);