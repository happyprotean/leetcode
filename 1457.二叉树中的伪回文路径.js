/*
 * @lc app=leetcode.cn id=1457 lang=javascript
 *
 * [1457] 二叉树中的伪回文路径
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
var pseudoPalindromicPaths  = function(root) {
  let isPalindromicPath = path => {
    let cache = {}, res = 0
    for (const val of path) {
      if (cache[val]) {
        cache[val] = cache[val] + 1
      } else {
        cache[val] = 1
      } 
    }
    for (const key of Object.keys(cache)) {
      if (cache[key] % 2 === 1) {
        res += 1
      }
    }
    return res === 0 || res === 1
  }

  let res = 0
  let dfs = (root, path) => {
    if (!root) return
    path.push(root.val)
    if (!root.left && !root.right) {
      if (isPalindromicPath(path)) res += 1
    } else {
      dfs(root.left, [...path])
      dfs(root.right, [...path])
    }
  }
  dfs(root, [])
  return res
};
// @lc code=end

