import { ListNode } from "../intro";

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head === null || head.next === null) return head;

    // Close the linked list into a ring
    let oldTail = head;
    let length = 1;
    while (oldTail.next !== null) {
        oldTail = oldTail.next;
        length++;
    }
    oldTail.next = head;

    // Find new tail : (length - k % length - 1)th node
    // and new head : (length - k % length)th node
    let newTail = head;
    for (let i = 0; i < length - k % length - 1; i++) {
        newTail = newTail.next!;
    }
    const newHead = newTail.next;

    // Break the ring
    newTail.next = null;

    return newHead;
}
