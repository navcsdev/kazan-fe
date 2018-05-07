import React, { PureComponent } from 'react';
import Button from 'material-ui/Button';
import { Field, reduxForm } from 'redux-form'
import Grid from 'material-ui/Grid'
import {Container, Error, GridStyled, LoginContent} from '../../styles/form/styled';
import TextField from '../../components/render-fields/TextField'

class RegisterForm extends PureComponent {

  render() {
    const {handleSubmit, error} = this.props;

    return (
        <Container>
          <LoginContent>
            <form onSubmit={handleSubmit}>

              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="username"
                    component={TextField}
                    label="Username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="password"
                    component={TextField}
                    label="Password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="phoneNumber"
                    component={TextField}
                    label="Phone number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="telegramUsername"
                    component={TextField}
                    label="Telegram Username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="email"
                    component={TextField}
                    label="Email"
                    type="email"
                  />
                </Grid>
                <GridStyled item xs={12}>
                  <Button type="submit" variant="raised" color="primary">
                    Register
                  </Button>
                  {error && <Error>{error}</Error>}
                </GridStyled>
              </Grid>
            </form>
          </LoginContent>
        </Container>
    );
  }
}

export default reduxForm({
  form: 'RegisterForm', // a unique identifier for this form
})(RegisterForm)
