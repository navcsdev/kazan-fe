import React, {PureComponent} from 'react';
import update from 'immutability-helper';
import Button from "material-ui/es/Button";
import TextField from "material-ui/TextField";
import Grid from "material-ui/es/Grid";

export default class SignUp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      telegramUsername: '',
      phoneNumber: '',
    }
  }
  handleSubmit = e => {
    console.log(e.target);
    this.setState(prevState => update(prevState, e.target))
  };

  render() {
    return(
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={12}>
            <Grid item lg={12}>
              <TextField
                fullWidth
                name="username"
                label="Username"
                value={this.state.username}
                margin="normal"
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                fullWidth
                name="password"
                label="Password"
                value={this.state.pasword}
                margin="normal"
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                fullWidth
                name="phoneNumber"
                label="Phone number"
                value={this.state.phoneNumber}
                margin="normal"
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                fullWidth
                name="telegramUsername"
                label="Telegram Username(@username)"
                value={this.state.telegramUsername}
                margin="normal"
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                value={this.state.email}
                margin="normal"
              />
            </Grid>
            <Grid item lg={12} alignContent="right">
              <Button type="submit" color="primary">Register</Button>
              <Button color="secondary">Cancel</Button>
            </Grid>
          </Grid>
        </form>
    );
  }
}
