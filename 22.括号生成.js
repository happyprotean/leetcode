/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
/**
 * 枚举 2 * n个位置，每个位置选择左括号/右括号
 */
var generateParenthesis = function (n) {
  const res = [],
    cur = new Array(2 * n).fill('') 
  const dfs = (i, left) => {
    if (i === 2 * n) {
      res.push(cur.join(''))
      return
    }
    // 选择左括号
    if (left < n) {
      cur[i] = '('
      dfs(i + 1, left + 1)
    }
    // 选择右括号
    if (i - left < left) {
      cur[i] = ')'
      dfs(i + 1, left)
    }
  }
  dfs(0, 0)
  return res
}
// @lc code=end
