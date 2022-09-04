/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let nums = {}
  for (const char of s) {
    if (nums[char]) {
      nums[char] = nums[char] + 1
    } else {
      nums[char] = 1
    }
  } 
  for (const char of t) {
    if (nums[char]) {
      nums[char] = nums[char] - 1
    } else {
      return char
    }
  }
  for (const key of Object.keys(nums)) {
    if (nums[key] === 1) return key
  }
};
// @lc code=end

