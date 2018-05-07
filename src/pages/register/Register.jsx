import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';

const mapDispatch = ({ register: { registerAsync }}) => ({
  registerAsync
});

const mapState = ({register}) => ({register});

class Register extends PureComponent {
  handleSubmit = (data) => {
    console.log(data);
    return this.props.registerAsync(data);
  };

  render() {
    return (
      <RegisterForm onSubmit={this.handleSubmit}/>
    );
  }
}

export default connect(undefined, mapDispatch)(Register);
// export default connect(null, null)(Register);
