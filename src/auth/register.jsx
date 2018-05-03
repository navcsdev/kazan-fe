import React, {PureComponent} from 'react';
import update from 'immutability-helper';
import Button from "material-ui/es/Button";
import TextField from "material-ui/TextField";
import Grid from "material-ui/es/Grid";
import {Auth} from 'aws-amplify';
import {Redirect} from 'react-router-dom'
import { FormHelperText } from 'material-ui/Form';
export default class Register extends PureComponent {
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
        e.preventDefault();
        let username = this.state.username.trim();
        let email = this.state.email.trim();
        let password = this.state.password.trim();
        let phone = this.state.phoneNumber.trim();
        let telegramUsername = this.state.telegramUsername.trim();

        Auth.signUp(username, password, email, phone, telegramUsername)
            .then(data => {
                console.log(data);
                this.setState(prevState => update(prevState, {enterAuth: {$set: true}}))
            }
            )
            .catch(err => {
                this.setState(prevState => update(prevState, {invalidFormDataMessage: {$set: err.message}}))
            })
    };
    
    handleSubmitVerification = e => {
    e.preventDefault();
    let verificationCode = this.state.code;
    let username = this.state.username;

    Auth.confirmSignUp(username, verificationCode)
        .then(
            this.setState(prevState => update(prevState, {authSuccess: {$set: true}}))
        )
        .catch(err =>
            console.log(err)
            // this.setState(prevState => update(prevState, {invalidCodeMessage: {$set: 'invalid verification code'}}))
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
        this.setState(prevState => update(prevState, {[name]: {$set: value}}))
    }
    
    handleSubmitVerification = async (e) => {
        e.preventDefault();
        const verificationCode = this.state.code;
        const username = this.state.username;
        Auth.confirmSignUp(username, verificationCode)
            .then( data => {
                console.log(data);
                this.setState(prevState => update(prevState, {authSuccess: {$set: true}}))
            })
            .catch(
                this.setState(prevState => update(prevState, {invalidCodeMessage: {$set: 'Invalid Verification Code'}}))
            )
    }

    countDownResendVerificationCode = () => {
        let counter = 10;
        var seconds = setInterval(() => {
            if (counter === 0) {
                clearInterval(seconds);
                this.setState(() => {
                    return {
                        enableResend: true
                    }
                });
            }
            counter--;
        }, 1000);
    }

    render() {
        const { username,
            password,
            passwordMatch,
            email,
            phoneNumber,
            code,
            authSuccess,
            enterAuth,
            telegramUsername,
            verificationCode,
            invalidUserNameMessage,
            invalidPasswordMessage,
            invalidEmailMessage,
            invalidPhoneMessage,
            enableResend,
            invalidCodeMessage,
            invalidFormDataMessage } = this.state;
         console.log(this.state);   
        return(
            <div>
                {!authSuccess && !enterAuth && (
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
                            <Button type="submit" color="primary" onClick={this.handleSubmit}>Register</Button>
                            {invalidFormDataMessage && (<FormHelperText id="name-error-text">{invalidFormDataMessage}</FormHelperText>)}
                            </Grid>
                        </Grid>
                    </form>
                )}
                {enterAuth && !authSuccess && (
                    <Grid container spacing={8}>
                        <Grid item lg={12}>
                            <TextField
                                fullWidth
                                name="code"
                                label="Verification Code"
                                value={verificationCode}
                                margin="normal"
                                onChange={this.handleOnChange}
                            />
                        </Grid>
                        <Grid item lg={12} alignContent="right">
                            <Button color="primary" onClick={this.handleSubmitVerification}>Confirm</Button>
                            {invalidCodeMessage && (<FormHelperText id="name-error-text">{invalidCodeMessage}</FormHelperText>)}
                        </Grid>
                    </Grid>
                )}
                {authSuccess && (<Redirect to='/login' />)}
            </div>
        )
    }
}