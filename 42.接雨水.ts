/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  let res: number = 0, pre_max = -Infinity, suf_max = -Infinity
  let left = 0, right = height.length - 1
  while (left <= right) {
    if (height[left] > height[right]) {
      suf_max = Math.max(suf_max, height[right])
      res += suf_max - height[right]
      right--
    } else {
      pre_max = Math.max(pre_max, height[left])
      res += pre_max - height[left]
      left++
    }
  }
  return res
}
// @lc code=end
