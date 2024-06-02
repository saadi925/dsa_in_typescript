import { ListNode } from "../intro";

export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) return null;

    let a: ListNode | null = headA;
    let b: ListNode | null = headB;

    while (a !== b) {
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }

    return a;
}
