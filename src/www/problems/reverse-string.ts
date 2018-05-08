// Given a string of "abc", reverse it iteratively and recursively
// Expected: "cba"

/**
 * Reverses a string by iterating over each character
 * @param str The string
 */
function reverseStringIter(str: string): string {
  let ret: string = "";

  for (let i: number = str.length - 1; i >= 0; i--) {
    ret += str[i];
  }

  return ret;
}

/**
 * Reverses a string by turning it into an array and using Array.reverse
 * @param str The string
 */
function reverseStringIter2(str: string): string {
  return str
    .split("")
    .reverse()
    .join("");
}

/**
 * Reverses a string by using recursion
 * @param str The string
 */
function reverseStringRecursive(str: string): string {
  return str.length === 0 ? "" : reverseStringRecursive(str.substr(1)) + str.charAt(0);
}

export { reverseStringIter, reverseStringIter2, reverseStringRecursive };
