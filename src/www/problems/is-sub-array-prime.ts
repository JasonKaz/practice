import { isPrime } from "./is-prime";

// Given an array of numbers, determine if the sum of the values within the index range in the array is prime

function isSubArrayPrime(ar: number[], lowerIndex: number, upperIndex: number): boolean {
  return isPrime(
    ar.reduce((prev: number, cur: number, idx: number) => {
      return prev + (idx >= lowerIndex && idx <= upperIndex ? cur : 0);
    }, 0)
  );
}

export { isSubArrayPrime };
