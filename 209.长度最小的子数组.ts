/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  let res: number = Infinity
  let left = 0,
    right = 0,
    sum = nums[left]
  while (left <= right && right < nums.length) {
    if (sum >= target) {
      res = Math.min(res, right - left + 1)
      sum -= nums[left]
      left++
    } else {
      right++
      sum += nums[right]
    }
  }
  if (left === 0 && right === nums.length) return 0
  return res
}
let res = minSubArrayLen(7, [2,3,1,2,4,3])
console.log(res)
// @lc code=end
