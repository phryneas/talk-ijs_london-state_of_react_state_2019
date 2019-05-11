import {
  simulateLoadingUserFromLocalStorage,
  simulateLogin
} from "../dataFetching";
import { User } from "./User";

import { types, flow } from "mobx-state-tree";

export const Login = types
  .model({
    user: types.maybe(User),
    error: types.maybe(types.string),
    initialized: types.optional(types.boolean, false)
  })
  .views(self => ({
    get loading() {
      return !self.initialized;
    },
    get loggedIn() {
      return !!self.user;
    }
  }))
  .actions(self => ({
    logout() {
      self.user = undefined;
    },
    initialize: flow(function*() {
      const user = yield simulateLoadingUserFromLocalStorage();
      self.user = user;
      self.initialized = true;
    }),
    login: flow(function*(username, password) {
      const apiUser = yield simulateLogin(username, password);
      if (apiUser) {
        self.user = User.create({
          username: apiUser.username,
          role: apiUser.role
        });
        self.error = undefined;
      } else {
        self.user = undefined;
        self.error = "wrong username or password";
      }
    })
  }));
