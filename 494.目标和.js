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
  let memo = new Array(target + 1).fill(0)
  memo[0] = 1
  for (let i = 0; i < nums.length; i++) {
    // j要倒序迭代
    for (let j = memo.length - 1; j >= 0 ; j--) {
      if (nums[i] <= j) {
        memo[j] = memo[j] + memo[j - nums[i]]
      }
    }
  }
  return memo[target]
}
// @lc code=end

let res = findTargetSumWays([4, 2, 1], 7)
