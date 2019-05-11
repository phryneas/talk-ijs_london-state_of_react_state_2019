import React from "react";
import {
  simulateLoadingUserFromLocalStorage,
  simulateLogin
} from "./dataFetching";

const LoginContext = React.createContext();

export function LoginProvider(props) {
  const [state, setLoginState] = React.useState({
    user: undefined,
    error: undefined,
    initialized: false
  });
  const value = React.useMemo(() => ({ state, setLoginState }), [state]);

  React.useEffect(() => {
    simulateLoadingUserFromLocalStorage().then(user =>
      setLoginState(state => ({ ...state, user, initialized: true }))
    );
  }, []);

  return <LoginContext.Provider value={value} {...props} />;
}

export function useLogin() {
  const context = React.useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  const { state, setLoginState } = context;

  const login = React.useCallback(
    async (username, password) => {
      const userObject = await simulateLogin(username, password);
      if (userObject) {
        setLoginState(state => ({
          ...state,
          user: userObject,
          error: undefined
        }));
      } else {
        setLoginState(state => ({
          ...state,
          user: undefined,
          error: "wrong username or password"
        }));
      }
    },
    [setLoginState]
  );

  const logout = React.useCallback(
    () => setLoginState(state => ({ ...state, user: undefined })),
    [setLoginState]
  );

  return {
    loading: !state.initialized,
    loggedIn: !!state.user,
    user: state.user,
    error: state.error,
    login,
    logout
  };
}
