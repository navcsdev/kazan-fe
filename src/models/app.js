
const initialState = {
  isUserLoggedIn: false,
  username: '',
}

export default {
  state: initialState,
  reducers: {
    isUserLoggedIn(state, payload) {
      return {
        ...state,
        isUserLoggedIn: payload
      }
    },
    setUsername(state, payload) {
      return {
        ...state,
        username: payload
      }
    },
    clear() {
      return initialState
    }
  },
  effects: {

  }
}