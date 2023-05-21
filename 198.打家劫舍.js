/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let f0 = 0, f1 = 0
  for (let i = 0; i < nums.length; i++) {
    let newf = Math.max(f1, f0 + nums[i])
    f0 = f1
    f1 = newf
  }
  return f1
};
// @lc code=end

let res = rob([1, 2, 3, 1])
console.log('res', res)

