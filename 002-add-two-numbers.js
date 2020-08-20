/* 
https://leetcode-cn.com/problems/add-two-numbers/
难度: 中等

预备知识：链表
学习链接：https://leetcode-cn.com/leetbook/detail/linked-list/

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 实现链表节点
class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/* 
实现链表
getNode(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 */
class LinkedList {
  constructor(array = []) {
    this.head = new ListNode('__head__')
    array.forEach((item) => {
      this.addAtHead(item)
    })
    return this
  }

  getNode(index) {
    let curNode = this.head
    for(var i = 0; i <= index; i++) {
      if (!curNode.next) return
      curNode = curNode.next
    }
    return curNode
  }

  get(index) {
    this.getNode(index).val
  }

  addAtHead(val) {
    const newNode = new ListNode(val)
    newNode.next = this.head.next
    this.head.next = newNode
  }

  addAtTail(val) {
    let curNode = this.head
    while (curNode.next) {
      curNode = curNode.next
    }
    const newNode = new ListNode(val)
    curNode.next = newNode
    return newNode
  }

  addAtIndex(index, val) {
    const newNode = new ListNode(val)
    if (index - 1 >= 0) {
      const preNode = this.getNode(index - 1)
      newNode.next = preNode.next
      preNode.next = newNode
    } else {
      this.addAtHead(val)
    }
  }

  deleteAtIndex(index) {
    const prevIndex = index - 1
    const curNode = this.getNode(index)
    const prevNode = prevIndex >= 0 ? this.getNode(index - 1) : this.head
    if (curNode) {
      prevNode.next = curNode.next
    }
  }

  delete(val) {
    let curNode = this.head
    let preNode = null
    while (curNode.val !== val) {
      curNode = curNode.next
      preNode = curNode
    }
    preNode.next = curNode.next
  }

  show() {
    let list = ''
    let curNode = this.head
    while (curNode.next) {
      if (curNode !== this.head) {
        list = list + curNode.val + ' -> '
      }
      curNode = curNode.next
    }
    list = list + curNode.val
    console.log('LinkedList: ', list)
  }
}

const l1 = new LinkedList([3, 4, 2])

const l2 = new LinkedList([4, 6, 5])

l1.show()
l2.show()

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let numStr1 = ''
  let numStr2 = ''
  let curNode1 = l1.head
  let curNode2 = l2.head
  while (curNode1.next) {
    curNode1 = curNode1.next
    numStr1 = curNode1.val + numStr1
  }


  while (curNode2.next) {
    curNode2 = curNode2.next
    numStr2 = curNode2.val + numStr2  
  }

  const sum = (+numStr1) + (+numStr2)
  const sumStr = sum + ''
  
  console.log('numStr1: ', numStr1)
  console.log('numStr2: ', numStr2)
  console.log('sumStr：', sumStr)

  const l3 = new LinkedList(sumStr.split('')) 
  return l3
};


const res = addTwoNumbers(l1, l2)
console.log('===== addTwoNumbers result =====')
res.show()
console.log('================================')