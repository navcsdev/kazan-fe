import React from 'react';
import VerificationForm from './VerificationForm'
import {connect} from "react-redux";
import Button from 'material-ui/Button';

const mapDispatch = ({ verification: { confirmSignUpAsync, resendSignUpAsync }}) => ({
  confirmSignUpAsync, resendSignUpAsync
})

class Verification extends React.PureComponent {

  handleSubmit = ({code}) => {
    return this.props.confirmSignUpAsync({code});
  };

  handleResend = () => {
    return this.props.resendSignUpAsync();
  };

  render() {
    return (
      <div>
        <VerificationForm onSubmit={this.handleSubmit}/>
        <span>Didn’t receive your code?
          <Button color="primary" onClick={this.handleResend}>
          Send it again
          </Button>
        </span>
      </div>
    );
  }
}

export default connect(null, mapDispatch)(Verification)