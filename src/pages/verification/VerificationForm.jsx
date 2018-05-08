import React from 'react';
import { Field, reduxForm } from 'redux-form'
import TextField from '../../components/render-fields/TextField'
import {Container, LoginContent} from "../../styles/form/styled";
import Grid from "material-ui/Grid";
import {Default as DefaultButton} from "../../styles/button";

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
                <DefaultButton type="submit" variant="raised" color="primary" loading={submitting}>
                  Verify
                </DefaultButton>
                <span>{error}</span>
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
