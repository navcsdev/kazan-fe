import React, {PureComponent} from 'react';
import update from 'immutability-helper';
import Button from "material-ui/es/Button";
import TextField from "material-ui/TextField";
import Grid from "material-ui/es/Grid";
import awsmobile from '../../../aws-exports'
import {Auth} from 'aws-amplify'

export default class SignUp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      telegramUsername: '',
      phoneNumber: '',
      code: '',
      enterAuth: false,
      authSuccess: false,
      invalidUserNameMessage: '',
      invalidPasswordMessage: '',
      invalidEmailMessage: '',
      invalidPhoneMessage: '',
      invalidCodeMessage: '',
      invalidFormDataMessage: '',
      enableResend: false
    }
  }
  handleSubmit = e => {
    console.log(e.target);
    let username = this.state.username.trim();
    let email = this.state.email.trim();
    let password = this.state.password.trim();
    let phone = this.state.phoneNumber.trim();

    Auth.signUp(username, password, email, phone)
        .then(
          this.setState(() => {
            return {
              enterAuth: true
            }
          })
        )
        .catch(err => {
          console.log(err)
        })

    this.setState(prevState => update(prevState, e.target))
  };

  handleSubmitVerification = e => {
    e.preventDefault();
    let verificationCode = this.state.code;
    let username = this.state.username;

    Auth.confirmSignUp(username, verificationCode)
        .then(
          this.setState(() => {
            return{
              authSuccess: true
            }
          })
        )
        .catch(
          this.setState(() => {
            invalidCodeMessage: 'invalid verification code'
          })
        )
  }

  resendVerifiticationCode = e => {
    e.preventDefault();
    let username = this.state.username;

    Auth.resendSignUp(username)
        .then(
          this.setState(() => {
            return{
              enableResend: true
            }
          })
        )
        .catch( err =>
          console.log(err)
        )
  }

  handleOnChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(this.state.username);
    console.log(name);
    console.log(value)
    this.setState(prevState => update(prevState, {[name]: {$set: value}}))
  }

  render() {
    let { username,
      password,
      passwordMatch,
      email,
      phoneNumber,
      telegramUsername,      
      invalidUserNameMessage,
      invalidPasswordMessage,
      invalidEmailMessage,
      invalidPhoneMessage,
      enableResend,
      invalidCodeMessage,
      invalidFormDataMessage } = this.state;
    return(
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={8}>
            <Grid item lg={12}>
              <TextField
                fullWidth
                name="username"
                label="Username"
                value={username}
                margin="normal"
                type="text"
                onChange={this.handleOnChange}
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                fullWidth
                name="password"
                label="Password"
                value={password}
                margin="normal"
                onChange={this.handleOnChange}
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                fullWidth
                name="phoneNumber"
                label="Phone number"
                value={phoneNumber}
                margin="normal"
                onChange={this.handleOnChange}
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                fullWidth
                name="telegramUsername"
                label="Telegram Username(@username)"
                value={telegramUsername}
                margin="normal"
                onChange={this.handleOnChange}
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                value={email}
                margin="normal"
                onChange={this.handleOnChange}
              />
            </Grid>
            <Grid item lg={12} alignContent="right">
              <Button type="submit" color="primary" onClick={this.handleSubmitVerification}>Register</Button>
              <Button color="secondary">Cancel</Button>
            </Grid>
          </Grid>
        </form>
    );
  }
}
