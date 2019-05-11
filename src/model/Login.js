import { observable, computed, action, flow } from "mobx";
import {
  simulateLoadingUserFromLocalStorage,
  simulateLogin
} from "../dataFetching";
import { User } from "./User";

export class Login {
  @observable user = undefined;
  @observable error = undefined;
  @observable initialized = false;

  @computed
  get loading() {
    return !this.initialized;
  }

  @computed
  get loggedIn() {
    return !!this.user;
  }

  @action.bound
  logout() {
    this.user = undefined;
  }

  initialize = flow(function*() {
    const user = yield simulateLoadingUserFromLocalStorage();
    this.user = user;
    this.initialized = true;
  });

  login = flow(function*(username, password) {
    const apiUser = yield simulateLogin(username, password);
    if (apiUser) {
      this.user = new User(apiUser.username, apiUser.role);
      this.error = undefined;
    } else {
      this.user = undefined;
      this.error = "wrong username or password";
    }
  });
}
