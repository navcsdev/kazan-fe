import React from 'react';
import Button from 'material-ui/Button';
import { Field, reduxForm } from 'redux-form'
import TextField from '../../components/render-fields/TextField'
import {Container, LoginContent} from "../../styles/form/styled";
import Grid from "material-ui/Grid";

class VerificationForm extends React.PureComponent {

  render() {
    const {handleSubmit, error, submitting} = this.props;

    return (
      <Container>
        <LoginContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Field
                  name="code"
                  component={TextField}
                  label="Code"
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="raised" color="primary">
                  Verify
                </Button>
              </Grid>
            </Grid>
          </form>
        </LoginContent>
      </Container>
    );
  }
}

export default reduxForm({
  form: 'VerificationForm', // a unique identifier for this form
})(VerificationForm)
