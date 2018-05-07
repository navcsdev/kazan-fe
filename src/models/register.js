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
        store: (state, payload) => state = payload
    },
    effects: {
        async registerAsync(payload) {
            const {username, email, password, telegramUsername, phoneNumber} = payload;
            return await Auth.signUp({username, password, attributes: {
                'email': email,
                'phone_number': phoneNumber,
                'nickname': telegramUsername
            }})
                .then(resp => {
                    this.store(payload);
                    dispatch.verification.setCredential({
                        username,
                        password
                    });
                    dispatch(push('/verification'))
                })
                .catch(err => {console.log(err); throw new SubmissionError({_error: err.message}) })
        }
    }
}
