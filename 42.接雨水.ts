/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function getPreMax(nums: number[]): number[] {
  let pre_max: number[] = [],
    max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i])
    pre_max.push(max)
  }
  return pre_max
}

function getSufMax(nums: number[]): number[] {
  let suf_max: number[] = [],
    max = -Infinity
  for (let i = nums.length - 1; i >= 0; i--) {
    max = Math.max(max, nums[i])
    suf_max.unshift(max)
  }
  return suf_max
}

function trap(height: number[]): number {
  let res: number = 0,
    pre_max: number[] = getPreMax(height),
    suf_max: number[] = getSufMax(height)
  for (let i = 0; i < height.length; i++) {
    res += Math.max(0, Math.min(pre_max[i], suf_max[i]) - height[i])
  }
  return res
}
// @lc code=end
