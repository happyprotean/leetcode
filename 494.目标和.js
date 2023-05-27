/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// s: nums所有元素和，p：加正号元素和
// p - (s - p) = target ==> p = (s + target)/2
var findTargetSumWays = function (nums, target) {
  const s = nums.reduce((prev, cur) => prev + cur, 0)
  if ((s + target) % 2 === 1 || s + target < 0) return 0
  const n = nums.length
  let memo = Array.from({ length: n + 1 }, () =>
    Array((s + target) / 2 + 1).fill(0)
  )
  memo[0][0] = 1
  for (let i = 1; i < memo.length; i++) {
    for (let j = 0; j < memo[i].length; j++) {
      if (nums[i - 1] > j) {
        memo[i][j] = memo[i - 1][j]
      } else {
        memo[i][j] = memo[i - 1][j] + memo[i - 1][j - nums[i - 1]]
      }
    }
  }
  return memo[n][(s + target) / 2]
}
// @lc code=end

let res = findTargetSumWays([4, 2, 1], 7)
