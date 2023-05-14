/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let res = [], cur = []
  const dfs = i => {
    if (i > 10) return
    // 剪枝
    if (n - i + 1 < k - cur.length) return // 数字个数不够
    let sum = cur.reduce((prev, val) => {
      return prev + val
    }, 0)
    if (sum > n) return // 已经 >n
    if (sum === n && cur.length === k) {
      res.push([...cur])
      return
    }

    // 选i
    cur.push(i)
    dfs(i + 1)
    cur.pop()
    // 不选i
    dfs(i + 1)
  }
  dfs(1)
  return res
};
// @lc code=end

