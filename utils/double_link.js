/**
 * 双向链表 
 */
class DoubleLinkNode {
  constructor(key, val) {
    this.key = key
    this.val  = val
    this.freq = 1
    this.prev = null
    this.next = null
  }
  incFreq() {
    this.freq++
  }
}

class DoubleLink {
  constructor() {
    this.head = new DoubleLinkNode(-1, -1)
    this.tail = new DoubleLinkNode(-1, -1)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
  }
  // 链表头部插入新节点
  unshift(node) {
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
    this.size++
  }
  // 删除某个节点
  delete(node) {
    node.next.prev = node.prev
    node.prev.next = node.next
    delete node.prev
    delete node.next
    this.size--
  }
  // 链表头部删除节点并返回
  pop() {
    if (this.size === 0) return undefined
    const node = this.tail.prev
    this.delete(node)
    return node
  }
}

exprt default {
  DoubleLink,
  DoubleLinkNode,
}