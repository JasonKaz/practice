/**
 * Clones an array without modification
 */
function cloneArray<T>(ar: T[]): T[] {
  return ar.slice();
}

export { cloneArray };
