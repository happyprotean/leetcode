/*
 * @lc app=leetcode.cn id=998 lang=javascript
 *
 * [998] 最大二叉树 II
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
  let node = new TreeNode(val)
  if (root === null) return node
  // 树相关题目，dummy节点为常用做法，不用再对根节点做特殊处理
  let dummy = new TreeNode(-1)
  dummy.right = root
  let curNode = dummy
  while (curNode.right) {
    if (curNode.right.val <= val) {
      node.left = curNode.right
      curNode.right = node
      break
    } else {
      curNode = curNode.right
    }
  }
  if (!curNode.right) {
    curNode.right = node
  }
  return dummy.right
};
// @lc code=end

