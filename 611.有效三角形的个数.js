/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 前提：有序数组
 * k从n到2反向枚举：
 *  left从0， right从k-1枚举
 *  如果nums[left]+nums[right]>c，那么left到right-1中的数和right相加，都大于c，均可组成三角形
 *  如果nums[left]+nums[right]<=c，直接增加left即可
 */
var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b)
  let n = nums.length,
    res = 0
  for (let k = n - 1; k >= 2; k--) {
    let c = nums[k]
    let left = 0,
      right = k - 1
    while (left < right) {
      if (nums[left] + nums[right] > c) {
        res += right - left
        right--
      } else {
        left++
      }
    }
  }
  return res
}
// @lc code=end
