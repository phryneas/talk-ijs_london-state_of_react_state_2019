// mock functions

export async function simulateLoadingUserFromLocalStorage() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return undefined; // no user in local storage, but hey - we tried ;)
}

export async function simulateLogin(username, password) {
  await new Promise(resolve => setTimeout(resolve, 500));
  if (username === "test" && password === "test") {
    return { username, role: "test_user" };
  }
  return undefined;
}
