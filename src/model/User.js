import { observable } from "mobx";

export class User {
  @observable username;
  @observable role;

  constructor(username = "", role = undefined) {
    this.username = username;
    this.role = role;
  }
}
