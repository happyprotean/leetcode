/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [],
    cur = []
  const dfs = i => {
    if (cur.length === k) {
      res.push([...cur])
      return
    }
    // 提前结束-剪枝
    if (n - i + 1 < k - cur.length) return
    // 选i
    cur.push(i)
    dfs(i + 1)
    cur.pop()

    // 不选i
    dfs(i + 1)
  }
  dfs(1)
  return res
}
// @lc code=end

let res = combine(4, 2)
console.log(res)