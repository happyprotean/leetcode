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
  target += nums.reduce((prev, cur) => prev + cur, 0)
  if (target % 2 === 1 || target < 0) return 0
  target /= 2
  const n = nums.length
  let memo = Array.from({ length: 2 }, () =>
    Array(target + 1).fill(0)
  )
  memo[0][0] = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < memo[0].length; j++) {
      if (nums[i] > j) {
        memo[(i+1)%2][j] = memo[i%2][j]
      } else {
        memo[(i+1)%2][j] = memo[i%2][j] + memo[i%2][j - nums[i]]
      }
    }
  }
  return memo[n%2][target]
}
// @lc code=end

let res = findTargetSumWays([4, 2, 1], 7)
