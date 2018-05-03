import { dispatch } from '@rematch/core'

export default {
  state: {
    credential: {}
  },
  reducers: {
    setCredential(state, payload) {
      return {
        ...state,
        credential: payload
      }
    }
  }
}