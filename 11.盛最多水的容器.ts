/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let res: number = 0
  let left = 0, right = height.length - 1
  while (left < right) {
    res = Math.max(res, Math.min(height[left], height[right]) * (right - left))
    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
  }
  return res
};
// @lc code=end

