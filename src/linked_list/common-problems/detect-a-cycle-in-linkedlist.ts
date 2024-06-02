import { createLinkedList, ListNode } from "../intro";

export function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}
export function runHasCycleTest() {
    // Test cases Implementations
    const cycleList = createLinkedList([1, 2, 3, 4]);
    if (cycleList) {
        let current = cycleList;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = cycleList;
    }
    console.log(hasCycle(cycleList)); // Output: true
}
