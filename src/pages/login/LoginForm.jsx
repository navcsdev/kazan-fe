import React from 'react';
import TextField from "material-ui/TextField";
import Button from 'material-ui/Button';
import { Field, reduxForm } from 'redux-form'

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

class LoginForm extends React.PureComponent {

  render() {
    const {handleSubmit, error, submitting} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          component={renderTextField}
          label="Username"
        />
        <Field
          name="password"
          component={renderTextField}
          label="Password"
          type="password"
        />
        <Button type="submit" variant="raised" color="primary">
          Login
        </Button>
      </form>
    );
  }
}

// const LoginForm = (handleSubmit, error, submitting) => (
  
// );

export default reduxForm({
  form: 'LoginForm', // a unique identifier for this form
})(LoginForm)