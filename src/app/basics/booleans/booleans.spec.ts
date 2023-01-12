import { userLoggedIn } from "./booleans";

describe('Booleans tests', () => {
  it('should return true', () => {
    expect(userLoggedIn()).toBeTruthy();
  })
});