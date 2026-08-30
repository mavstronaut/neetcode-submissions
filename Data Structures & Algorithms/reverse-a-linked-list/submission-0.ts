/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */



class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head) return head;
        let prev: ListNode | null = null;
        let curr: ListNode = head;
        console.log(head);

        while (curr) {
            let nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        }
        return prev;
    }
}
