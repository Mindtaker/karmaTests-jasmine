import { incrementer } from "./numbers";

describe("Numbers tests", () => {
  it('should return 100 if the number is greater than 100', () => {
    const result = incrementer(101);
    expect(result).toBe(100);
  });
  it('should return the value incremented by one if the number is less than 100', () => {
    const result = incrementer(99);
    expect(result).toBe(100);
  });
});