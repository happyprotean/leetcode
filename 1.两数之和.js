/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let result = [], cache = {}
  for (let index = 0; index < nums.length; index++) {
    if (cache.hasOwnProperty(target - nums[index])){
      return [cache[target - nums[index]], index]
    }
    cache[nums[index]] = index
  }
  return result
};
// @lc code=end

