import React from 'react';
import {connect} from "react-redux";
import LoginForm from './LoginForm'

const mapDispatch = ({ login: { loginAsync }}) => ({
  loginAsync
})

class Login extends React.PureComponent {

  handleSubmit = (data) => {
    return this.props.loginAsync(data);
  };

  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit}/>
    );
  }
}

export default connect(null, mapDispatch)(Login)