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
/**
 * recur(root):

递归返回值：
当节点root 左 / 右子树的高度差 < 2 ：则返回以节点root为根节点的子树的最大高度，即节点 root 的左右子树中最大高度加 1（ max(left, right) + 1 ）；
当节点root 左 / 右子树的高度差 ≥2 ：则返回 -1 ，代表 此子树不是平衡树 。
递归终止条件：
当越过叶子节点时，返回高度 0；
当左（右）子树高度 left== -1 时，代表此子树的 左（右）子树 不是平衡树，因此直接返回 -1
 */
var isBalanced = function(root) {

  const recur = root => {
    if (root === null) return 0;
    const left = recur(root.left)
    if (left  === -1) return -1
    const right = recur(root.right)
    if (right === -1) return -1

    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1
  }

  return recur(root) != -1
};

// var isBalanced = function(root) {
//   if (root === null) return true;

//   const getTreeHeight = root => {
//     if (root === null) return 0;
//     const leftHeight = getTreeHeight(root.left);
//     const rightHeight = getTreeHeight(root.right);
//     return Math.max(leftHeight, rightHeight) + 1;
//   }

//   const leftHeight = getTreeHeight(root.left);
//   const rightHeight = getTreeHeight(root.right);
//   return Math.abs(leftHeight - rightHeight) <= 1
//     && isBalanced(root.left)
//     && isBalanced(root.right)
// };
// @lc code=end

