/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.root = root
  this.nodes = []
  this.getLeftest(root)
};

BSTIterator.prototype.getLeftest = function(node) {
  this.nodes.push(node)
  while (node.left) {
    node = node.left
    this.nodes.push(node)
  }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  let node = null
  if (this.hasNext()) {
    node = this.nodes.pop()
    if (node.right) {
      this.getLeftest(node.right)
    }
    return node.val
  }
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.nodes.length > 0
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

