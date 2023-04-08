/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b)
  let res: number = Infinity
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum > target) {
        if (Math.abs(sum - target) < Math.abs(res - target)) {
          res = sum
        }
        right--
      } else if (sum < target) {
        if (Math.abs(sum - target) < Math.abs(res - target)) {
          res = sum
        }
        left++
      } else {
        return target
      }
    }
  }
  return res
}
// @lc code=end
