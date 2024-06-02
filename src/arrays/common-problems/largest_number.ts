export function findSecondLargest(arr: number[]): number | null {
    if (arr.length < 2) return null;

    let first = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second;
}

console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4
