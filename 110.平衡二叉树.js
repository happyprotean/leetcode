/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
function getTreeHeight(root) {
  // 当左右两颗子树的高度差大于1时，提前返回特殊值-1，表示树是不平衡的
  if (!root) return 0
  const lh = getTreeHeight(root.left)
  if (lh === -1) return -1
  const rh = getTreeHeight(root.right)
  if (rh === -1 || Math.abs(lh - rh) > 1) return -1
  return 1 + Math.max(lh, rh)
}

var isBalanced = function(root) {
  return getTreeHeight(root) !== -1
};
// @lc code=end

