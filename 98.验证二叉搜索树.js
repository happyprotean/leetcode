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
var isValidBST = function(root, min = -Infinity, max = Infinity) {
  if (!root) return true
  const val = root.val
  return val > min && val < max && isValidBST(root.left, min, val) && isValidBST(root.right, val, max)
};

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

// 后序遍历，将左右子树的取值范围向上传递，判断根节点是否在合理的范围内
var isValidBST = function(root) {
  // help函数返回当前数的最小值和最大值
  const help = node => {
    // [Infinity, -Infinity]确保node.val <= l_max || node.val >= r_min不成立
    if (!node) return [Infinity, -Infinity]
    const [l_min, l_max] = help(node.left)
    const [r_min, r_max] = help(node.right)
    //[-Infinity, Infinity] 表示非二叉搜索树，且可以保证将此结果一直上传，直到函数入口
    if (node.val <= l_max || node.val >= r_min) return [-Infinity, Infinity]
    return [Math.min(l_min, node.val), Math.max(r_max, node.val)]
  }
  return help(root)[0] === -Infinity ? false : true
};
// @lc code=end

