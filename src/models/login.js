import { Auth } from 'aws-amplify';
import { dispatch } from '@rematch/core';
import {push} from "react-router-redux";
import {SubmissionError} from "redux-form";

export default {
  state: {

  },
  reducers: {

  },
  effects: {
<<<<<<< HEAD
    async loginAsync(payload) {      
=======
    async loginAsync(payload) {
>>>>>>> c1569815b5462480bd07c93fc9fb7066a1fb9e45
      const {username, password} = payload;
      const {isUserLoggedIn, setUsername} = dispatch.app;
      try {
        const data = await Auth.signIn(username, password);
        isUserLoggedIn(true);
        setUsername(data.username);
        dispatch(push('/'));
      } catch(err) {
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
      }
    }
  }
}
