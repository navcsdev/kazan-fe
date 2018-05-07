import React from 'react';
import Button from 'material-ui/Button';
import { Field, reduxForm } from 'redux-form';
import TextField from '../../components/render-fields/TextField';

class VerificationForm extends React.PureComponent {

  render() {
    const {handleSubmit, error, submitting} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="code"
          component={TextField}
          label="Code"
        />        
        <Button type="submit" variant="raised" color="primary">
          Verify
        </Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'VerificationForm', // a unique identifier for this form
})(VerificationForm)