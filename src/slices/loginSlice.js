import { createSlice, createSelector } from "redux-starter-kit";
import {
  simulateLogin,
  simulateLoadingUserFromLocalStorage
} from "../dataFetching";

export const loginSlice = createSlice({
  slice: "login",
  initialState: {
    user: undefined,
    error: undefined,
    initialized: false
  },
  reducers: {
    initialisationFinished(draft, action) {
      draft.initialized = true;
      draft.user = action.payload;
    },
    loginError(draft, action) {
      draft.user = undefined;
      draft.error = action.payload;
    },
    loginSucceeded(draft, action) {
      draft.user = action.payload;
      draft.error = undefined;
    },
    logout(draft) {
      draft.user = undefined;
    }
  }
});

export const selectLoginInfo = createSelector(
  [loginSlice.selectors.getLogin],
  loginState => ({
    loading: !loginState.initialized,
    loggedIn: !!loginState.user,
    error: loginState.error
  })
);

export const selectUser = createSelector(
  [loginSlice.selectors.getLogin],
  loginState => loginState.user
);

export function initialisationThunk() {
  return async dispatch => {
    const user = await simulateLoadingUserFromLocalStorage();
    dispatch(loginSlice.actions.initialisationFinished(user));
  };
}

export function loginThunk(username, password) {
  return async dispatch => {
    const user = await simulateLogin(username, password);
    if (user) {
      dispatch(loginSlice.actions.loginSucceeded(user));
    } else {
      dispatch(loginSlice.actions.loginError("wrong username or password"));
    }
  };
}
