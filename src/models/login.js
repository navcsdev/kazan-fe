import { Auth } from 'aws-amplify';
import { dispatch } from '@rematch/core'
import {push} from "react-router-redux";
import {SubmissionError} from "redux-form";

export default {
  state: {

  },
  reducers: {

  },
  effects: {
    async loginAsync(payload) {            
      const {username, password} = payload;
      Auth.signIn(username, password)
        .then(() => dispatch(push('/register')))
        .catch(err => {
          if (err.code === 'UserNotConfirmedException') {
            dispatch.verification.setCredential({
              username,
              password
            });
            dispatch(push('/verification'));
          } else {
            throw new SubmissionError({
              _error: err.message
            })
          }
        })
    }
  }
}
