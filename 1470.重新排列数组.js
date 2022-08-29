/*
 * @lc app=leetcode.cn id=1470 lang=javascript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
// 使用负号标记位置已经正确的元素
var shuffle = function(nums, n) {
  for(let i = 0; i < 2 * n; i++) {
    let j = i
    while (nums[i] > 0) {
      j = j < n ? 2 * j : 2 * (j -n) + 1
      let tmp = nums[i] 
      nums[i] = nums[j]
      nums[j] = -tmp
    }
  }
  return nums.map(num => -num)
};
// @lc code=end

