// Check if a given number is prime

// tslint:disable:no-magic-numbers

/**
 * Checks if a value is prime
 * @param value The value to check
 */
function isPrime(value: number): boolean {
  if (value <= 1) {
    return false;
  } else if (value <= 3) {
    return true;
  } else if (value % 2 === 0 || value % 3 === 0) {
    return false;
  } else {
    let f: number = 5;
    while (f <= Math.sqrt(value)) {
      if (value % f === 0 || value % (f + 2) === 0) {
        return false;
      }
      f += 6;
    }
  }

  return true;
}

export { isPrime };
