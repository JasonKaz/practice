// Given an array of [1, 2, 3] return a new array with the elements in a random order
// Expected: [1, 2, 3], [3, 1, 2], [2, 3, 1], etc

/**
 * Re-orders the elements in the array in a random order
 */
function randomizeArrayOrder<T>(ar: T[]): T[] {
  const ret: T[] = [];

  while (ar.length > 0) {
    ret.push(ar.splice(Math.floor(Math.random() * ar.length), 1)[0]);
  }

  return ret;
}

export { randomizeArrayOrder };
