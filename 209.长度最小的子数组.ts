/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  let res: number = Infinity
  let left = 0, sum = 0
  for (let right = 0; right < nums.length; right++) {
    // 更新右端点
    sum += nums[right]
    // 更新左端点
    while(sum >= target) {
      sum -= nums[left]
      res = Math.min(res, right - left + 1)
      left++
    }
  }
  if(res > nums.length) res = 0
  return res
}
let res = minSubArrayLen(7, [2,3,1,2,4,3])
console.log(res)
// @lc code=end
