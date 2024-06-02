export function findDuplicate(arr: number[]): number {
    const seen = new Set<number>();
    for (const num of arr) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }
    return -1;
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
