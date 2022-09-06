/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  let cache = new Map()
  let res = new Set()
  const dfs = node => {
    if (!node) return ''
    let str = node.val + '(' + dfs(node.left) + ')(' + dfs(node.right) + ')'
    if (cache.has(str)) {
      res.add(cache.get(str))
    } else {
      cache.set(str, node)
    }
    return str
  }
  dfs(root)
  return [...res]
};
// @lc code=end

