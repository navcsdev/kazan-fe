import React from 'react';
import TextField from "material-ui/TextField";
import Button from 'material-ui/Button';
import { Field, reduxForm } from 'redux-form'
import {Container, LoginContent} from "../../styles/form/styled";
import {GridStyled} from  "./styled"
import Grid from "material-ui/es/Grid";
import Link from "react-router-dom/Link";

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
);

class LoginForm extends React.PureComponent {

  render() {
    const {handleSubmit, error, submitting} = this.props;
    return (
      <Container>
        <LoginContent>
          <form onSubmit={handleSubmit}>
          <Grid container spacing={24} >
            <Grid item xs={12}>
              <Field
                fullWidth
                name="username"
                component={renderTextField}
                label="Username"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                fullWidth
                name="password"
                component={renderTextField}
                label="Password"
                type="password"
              />
            </Grid>
            <GridStyled item xs={12}>
              <Button type="submit" variant="raised" color="primary">
                Login
              </Button>
              <Link to="/register"><Button secondary fluid>Create an account</Button></Link>
            </GridStyled>
          </Grid>
        </form>
        </LoginContent>
      </Container>
    );
  }
}

export default reduxForm({
  form: 'LoginForm', // a unique identifier for this form
})(LoginForm)
