// Implement merge sort
// Given [4, 5, 1, 3, 2] output [1, 2, 3, 4, 5]

function mergeSort(ar: number[]): number[] {
    if (ar.length <= 1) {
        return ar;
    }

    const cloned: number[] = ar.slice();
    const first: number[] = cloned.splice(0, Math.ceil(ar.length / 2)); // tslint:disable-line:no-magic-numbers
    const second: number[] = cloned;

    return merge(mergeSort(first), mergeSort(second));
}

function merge(left: number[], right: number[]): number[] {
    const ret: number[] = [];

    // Compare first elements of each array and arrange them in new array
    while (left.length > 0 && right.length > 0) {
        // @ts-ignore
        ret.push(left[0] <= right[0] ? left.shift() : right.shift());
    }

    // If any leftovers on the left side, add them
    while (left.length > 0) {
        // @ts-ignore
        ret.push(left.shift());
    }

    // If any leftovers on the right side, add them
    while (right.length > 0) {
        // @ts-ignore
        ret.push(right.shift());
    }

    return ret;
}

export { mergeSort };
