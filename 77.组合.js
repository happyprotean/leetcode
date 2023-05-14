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
  // dfs(i)表示从[1, ..., i]中选择数
  const dfs = (i) => {
    if (cur.length === k) {
      res.push([...cur])
      // 可以直接返回，剪枝
      return
    }
    // [1, ..., i]最多有i个数，当小于剩余未选数的个数时，可以提前返回
    // 因为即使全选也满足不了条件
    if (i < k - cur.length) return
    for (let j = i; j > 0; j--) {
      cur.push(j) 
      dfs(j - 1)
      cur.pop()
    }
  }
  dfs(n)
  return res
}
// @lc code=end

let res = combine(4, 2)
console.log(res)