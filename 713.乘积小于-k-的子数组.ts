/*
 * @lc app=leetcode.cn id=713 lang=typescript
 *
 * [713] 乘积小于 K 的子数组
 */

// @lc code=start
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let res: number = 0,
    prod = 1,
    left = 0
  for (let right = 0; right < nums.length; right++) {
    if (k <= 1) return 0
    // 更新右端点
    prod *= nums[right]
    // 更新左端点
    while (prod >= k) {
      prod /= nums[left]
      left++
    }
    // left, left + 1, ..., right 相乘均小于k
    // 那么以right结尾的子数组个数为 right - left + 1
    res += right - left + 1
  }
  return res
}
// @lc code=end
