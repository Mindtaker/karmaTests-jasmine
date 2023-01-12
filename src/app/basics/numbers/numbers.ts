export function incrementer(value: number) {
  if (value > 100) {
    return 100;
  } else {
    return value + 1;
  }
}
