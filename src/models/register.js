import { Auth } from 'aws-amplify';
import { dispatch } from '@rematch/core';
import { push } from 'react-router-redux';
import { SubmissionError } from 'redux-form';

export default {
    state: {
        username: '',
        email: '',
        password: '',
        telegramUsername: '',
        phoneNumber: '',
    },
    reducers: {
    },
    effects: {
      async registerAsync(payload) {
        try {
          const {username, email, password, telegramUsername, phoneNumber} = payload;
          
          await Auth.signUp({
            username, 
            password, 
            attributes: {
              'email': email,
              'phone_number': phoneNumber,
              'nickname': telegramUsername
            }
          });
          dispatch.verification.setCredential({
            username: username,
            password: password
          });
          dispatch(push('/verification'));
        } catch (err) {
          console.log(err); 
          throw new SubmissionError({_error: err.message}) 
        }
      }
    }
}
