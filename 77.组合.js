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
// 整体框架上是对数的子集回溯，只是需要判断cur，是否满足条件
var combine = function (n, k) {
  const res = [],
    cur = []
  // dfs(i)表示从[i, ..., n]中选择数
  const dfs = i => {
    if (cur.length === k) {
      res.push([...cur])
      return
    }
    // 元素个数肯定不满足条件，提前返回
    if (n - i + 1 < k - cur.length) return
    for (let j = i; j <= n; j++) {
      cur.push(j) 
      dfs(j + 1)
      cur.pop()
    }
  } 
  dfs(1)
  return res
}
// @lc code=end

let res = combine(4, 2)
console.log(res)