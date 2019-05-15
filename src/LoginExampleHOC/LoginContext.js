import React from "react";
import {
  simulateLoadingUserFromLocalStorage,
  simulateLogin
} from "./dataFetching";

const LoginContext = React.createContext();

export class LoginProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      user: undefined,
      error: undefined,
      initialized: false
    };
  }

  componentDidMount() {
    simulateLoadingUserFromLocalStorage().then(user =>
      this.setState(state => ({ ...state, user, initialized: true }))
    );
  }

  getValue() {
    if (!this.value || this.state !== this.lastState) {
      this.value = {
        state: this.state,
        setState: (...args) => this.setState(...args)
      };
      this.lastState = this.state;
    }
    return this.value;
  }

  render() {
    return <LoginContext.Provider value={this.getValue()} {...this.props} />;
  }
}

export function withLogin(Component) {
  function wrapped(props) {
    return (
      <LoginContext.Consumer>
        {({ state, setState }) => (
          <Component
            loading={!state.initialized}
            loggedIn={!!state.user}
            user={state.user}
            error={state.error}
            login={async function(username, password) {
              const userObject = await simulateLogin(username, password);
              if (userObject) {
                setState(state => ({
                  ...state,
                  user: userObject,
                  error: undefined
                }));
              } else {
                setState(state => ({
                  ...state,
                  user: undefined,
                  error: "wrong username or password"
                }));
              }
            }}
            logout={() => {
              setState(state => ({ ...state, user: undefined }));
            }}
            {...props}
          />
        )}
      </LoginContext.Consumer>
    );
  }
  wrapped.displayName = `withLogin(${Component.displayName})`;
  return wrapped;
}
