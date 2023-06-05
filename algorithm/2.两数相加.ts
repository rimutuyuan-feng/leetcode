/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  //时间复杂对O(n),空间复杂度O(n)
  //过滤
  if(l1===null||l2===null){
    return l1===null?l2:l1
  }
  //新链表的空头
  const newHead=new ListNode()
  //遍历指针，指向当前节点
  let cur=newHead
  //进位信息
  let carry=0
  //链表都不为空
  while(l1!==null&&l2!==null){
    cur.next=new ListNode()
    cur=cur.next
    const tempSum=carry+l1.val+l2.val
    cur.val=tempSum%10
    carry=Math.floor(tempSum/10)
    l1=l1.next
    l2=l2.next
  }
  let noNull=l1===null?l2:l1
  //一个链表不空，且进位信息不为0
  while(noNull!==null&&carry!==0){
    cur.next=new ListNode()
    cur=cur.next
    const tempSum=noNull.val+carry
    cur.val=tempSum%10
    carry=Math.floor(tempSum/10)
    noNull=noNull.next
  }
  //一个链表不空，进位信息为0
  if(noNull!==null){
    cur.next=noNull
  }
  //链表全空，进位信息不为0
  if(carry!==0){
    cur.next=new ListNode(carry)
  }
  return newHead.next
};
// @lc code=end

