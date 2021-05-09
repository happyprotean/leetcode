/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
var countNodes = function(root) {
  if (root === null) return 0

  const height = (node) => {
    let h = 0
    while(node){
      node = node.left
      h++
    }
    return h
  }

  let left = height(root.left)
  let right = height(root.right)
  if (left === right){
    return countNodes(root.right) + 2 ** left
  } else {
    return countNodes(root.left) + 2 ** right
  }

};
// @lc code=end

