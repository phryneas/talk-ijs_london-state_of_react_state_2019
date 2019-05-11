import { types } from "mobx-state-tree";

export const User = types.model({
  username: types.string,
  role: types.string
});
