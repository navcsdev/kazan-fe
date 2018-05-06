import React, { PureComponent } from 'react';
import TextField from "material-ui/TextField";
import Button from 'material-ui/Button';
import { Field, reduxForm } from 'redux-form'
import Grid from 'material-ui/Grid'
import { Container } from './styled';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
      label={label}
      {...input}
      {...custom}
  />
)

class RegisterForm extends PureComponent {

  render() {
    const {handleSubmit, submitting, touched, error} = this.props;

    return (
        <Container>
            <form onSubmit={handleSubmit}>
            {error && <strong>{error}</strong>}
            <Grid container spacing={24}>
                <Grid item lg={12}>
                    <Field
                        fullWidth
                        name="username"
                        component={renderTextField}
                        label="Username"
                />
                </Grid>
                <Grid item lg={12}>
                    <Field
                        fullWidth
                        name="password"
                        component={renderTextField}
                        label="Password"
                        type="password"
                />
                </Grid>
                <Grid item lg={12}>
                    <Field
                        fullWidth
                        name="phoneNumber"
                        component={renderTextField}
                        label="Phone number"
                />
                </Grid>
                <Grid item lg={12}>
                    <Field
                        fullWidth
                        name="telegramUsername"
                        component={renderTextField}
                        label="Telegram Username"
                />
                </Grid>
                <Grid item lg={12}>
                    <Field
                        fullWidth
                        name="email"
                        component={renderTextField}
                        label="Email"
                        type="email"
                />
                </Grid>
                <Grid item lg={12}>
                    <Button type="submit" variant="raised" color="primary">
                        Register
                    </Button>
                </Grid>
            </Grid>
            </form>
        </Container>
    );
  }
}

export default reduxForm({
  form: 'RegisterForm', // a unique identifier for this form
})(RegisterForm)