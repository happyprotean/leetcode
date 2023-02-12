/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
// 双向链表节点
var DoubleListNode = function(key, val) {
  this.key = key
  this.val = val
  this.prev = null 
  this.next = null
}

// 双向链表
var DoubleList = function() {
  // 初始化
  this.head = new DoubleListNode(0, 0)
  this.tail = new DoubleListNode(0, 0)
  this.head.next = this.tail
  this.tail.prev = this.head
  this.size = 0
}
// 链表尾部添加节点node
DoubleList.prototype.addLast = function(node) {
  node.prev = this.tail.prev
  node.next = this.tail
  this.tail.prev.next = node
  this.tail.prev = node
  this.size++
}
// 删除链表中的node节点
DoubleList.prototype.remove = function(node){
  node.next.prev = node.prev
  node.prev.next = node.next
  this.size--
}
// 删除链表中的第一个元素，并返回被删除的元素
DoubleList.prototype.removeFirst = function() {
  if (this.head.next === this.tail) return
  const node = this.head.next
  this.remove(node)
  return node
}
DoubleList.prototype.getSize = function() {
  return this.size
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.list = new DoubleList()
  this.capacity = capacity
  this.cache = new Map()
};
// 将某个key提升为最近使用的
// 先删除节点，再将节点插入到队尾
LRUCache.prototype.makeRecently = function(key) {
  const node = this.cache.get(key)
  this.list.remove(node)
  this.list.addLast(node)
}
// 添加最近访问的节点，并在缓存中添加节点key
LRUCache.prototype.addRecently = function(key, val) {
  const node = new DoubleListNode(key, val)
  this.list.addLast(node)
  this.cache.set(key, node)
}
// 删除某个节点，并在缓存中删除节点key
LRUCache.prototype.deleteKey = function(key, val) {
  const node = this.cache.get(key)
  this.list.remove(node)
  this.cache.delete(node.key)
}
LRUCache.prototype.removeLeastRecently = function(key, val) {
  const deleteNode = this.list.removeFirst()
  this.cache.delete(deleteNode.key)
}


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) return -1
  this.makeRecently(key)
  return this.cache.get(key).val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.deleteKey(key)
    this.addRecently(key, value)
  } else {
    if (this.capacity <= this.list.getSize()) {
      this.removeLeastRecently()
    }
    this.addRecently(key, value)
  }
};

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

