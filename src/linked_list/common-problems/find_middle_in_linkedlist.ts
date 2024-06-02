import { createLinkedList, ListNode } from "../intro";

export function findMiddle(head: ListNode | null): ListNode | null {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    return slow;
}

const listToFindMiddle = createLinkedList([1, 2, 3, 4, 5]);
console.log(findMiddle(listToFindMiddle)); // Output: ListNode { val: 3, next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }
