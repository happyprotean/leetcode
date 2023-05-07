/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/**
 * 当前节点情况
 * - 为空：返回空
 * - 为p：返回p
 * - 为q：返回q
 * - 其他情况
 *  - p,q在左右子树中：返回当前节点
 *  - p,q在左子树：返回左子树结果
 *  - p,q在右子树：返回右子树结果
 *  - p,q左右子树均不在：返回空
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root === null || root === p || root === q) return root
  const left = lowestCommonAncestor(root.left, p, q) 
  const right = lowestCommonAncestor(root.right, p, q)
  if (left && right) return root
  if (left) return left
  return right
};
// @lc code=end

