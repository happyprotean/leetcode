/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU 缓存
 */

// @lc code=start
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

class LFUCache {
  constructor(cap) {
    this.cap = cap
    this.map = new Map() // key -> Node
    this.freqArr = [new DoubleLink(), new DoubleLink()]
    this.minFreq = 1
  }
  get(key) {
    const node = this.map.get(key)
    if (!node) return -1
    this.updateFreq(node)
    return node.val
  }
  put(key, val) {
    if (this.cap <= 0) return
    let node = this.map.get(key)
    // 节点已存在
    if (node) {
      this.updateFreq(node) 
      node.val = val
      return
    }
    // 删除频率最小且最早访问的节点
    if (this.cap <= this.map.size) {
      const doubleLink = this.freqArr[this.minFreq]
      const deleteNode = doubleLink.pop()
      this.map.delete(deleteNode.key)
    }
    node = new DoubleLinkNode(key, val)
    this.map.set(key, node)
    this.minFreq = 1
    this.freqArr[this.minFreq].unshift(node)
  }
  updateFreq(node){
    const freq = node.freq
    const doubleLink = this.freqArr[freq]
    doubleLink.delete(node)
    node.incFreq()
    if(!this.freqArr[freq + 1]) {
      this.freqArr[freq + 1] = new DoubleLink()
    }
    this.freqArr[freq + 1].unshift(node)
    // 更新最小频率
    if (this.minFreq === freq && this.freqArr[freq].size === 0) {
      this.minFreq = freq + 1
    }
  }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

