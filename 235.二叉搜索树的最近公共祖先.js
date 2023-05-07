/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * - 为空：返回空(无此分支)
 * - 为p：返回p
 * - 为q：返回q
 * - 其他情况
 *  - p,q在左右子树中：返回当前节点
 *  - p,q在左子树：返回左子树结果
 *  - p,q在右子树：返回右子树结果
 *  - p,q左右子树均不在：返回空(无此分支)
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root.val > Math.max(p.val, q.val)) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (root.val < Math.min(p.val, q.val)) {
    return lowestCommonAncestor(root.right, p, q)
  }
  return root
};
// @lc code=end

