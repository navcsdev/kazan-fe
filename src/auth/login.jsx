import React, {PureComponent} from 'react'
import App from '../App';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import awsmobile from '../aws-exports';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper'
import Button from "material-ui/es/Button";
import TextField from "material-ui/TextField";
import Grid from "material-ui/es/Grid";
import {Auth} from 'aws-amplify';
import update from 'immutability-helper';

export default class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            logInStatus: false,
            forgetPasswor: false,
            invalidUserNameMessage: '',
            invalidPasswordMessage: '',
            modalOpen: false,
            invalidCodeMessage: '',
            cognitoUser: ''
        }
    }
    handleOnChange = e => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(this.state.username);
        console.log(name);
        console.log(value)
        this.setState(prevState => update(prevState, {[name]: {$set: value}}))
    }

    SignInCustom = async(e) => {
        e.preventDefault();
        this.state = (() => {
            this.username = this.state.username
            this.password = this.state.password
        })
        Auth.signIn(this.state.username, this.state.password)
            .then(user => {
                this.state(() => ({logInStatus: true, cognitoUser: user}))
                sessionStorage.setItem(() => ({'isLoggedIn': true, 'user': user}))
            })
            .cach(err => console.log(err));
    };

    render() {
        const { username, password, logInStatus, enterMFA, invalidCredentialsMessage, enableResend } = this.state;
        return(
            <div>
                { !logInStatus && (
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
                            <Grid item lg={12} alignContent="right">
                                <Paper>
                                    <Button type="submit" color="primary" onClick={this.SignInCustom}>Login</Button>
                                    <Divider className="divider" horizontal>Or</Divider>
                                    <Link to="/register"><Button secondary fluid>Sign Up Now</Button></Link>
                                </Paper>
                            </Grid>
                        </Grid>
                    </form>
                )}
                { logInStatus && (<App authStatus={true} />)}
            </div>
        )
    }
}