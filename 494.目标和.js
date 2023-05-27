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
var findTargetSumWays = function(nums, target) {
  const s = nums.reduce((prev, cur) => prev + cur, 0)
  if ((s + target) % 2 === 1) return 0 
  const n = nums.length
  // dfs表示从前i个数中，选择和为t的方案个数
  const dfs = (i, t) => {
    if(i < 0) {
      return t === 0 ? 1 : 0
    }
    // 不选择第i个数，或选择第i个数
    return dfs(i-1, t) + dfs(i-1, t-nums[i])
  }
  return dfs(n-1, (s + target) / 2)
};
// @lc code=end

