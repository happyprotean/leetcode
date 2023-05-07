/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
// 前序遍历，首先判断根节点是否满足区间条件，然后依次判断左右子节点
// var isValidBST = function(root, min = -Infinity, max = Infinity) {
//   if (!root) return true
//   const val = root.val
//   return val > min && val < max && isValidBST(root.left, min, val) && isValidBST(root.right, val, max)
// };

// 中序遍历，对应的节点是一个升序数组
// 将节点值存入数组再依次判断，占用O(n)空间
// 但其实只需要保存前一个节点值即可
var isValidBST = function(root) {
  let pre = -Infinity
  const help = node => {
    if (!node) return
    help(node.left)
    if (node.val > pre) {
      pre = node.val
    } else {
      pre = Infinity
    }
    help(node.right)
  }
  help(root)
  return pre !== Infinity
};
// @lc code=end

