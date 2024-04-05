/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum = function (nums, target) {
  let res = [],
    n = nums.length
  nums.sort((a, b) => a - b)
  for (let a = 0; a < n - 3; a++) {
    const x = nums[a]
    // 避免重复
    if (a > 0 && nums[a] === nums[a - 1]) continue
    if (x + nums[a + 1] + nums[a + 2] + nums[a + 3] > target) break
    if (x + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) continue
    for (let b = a + 1; b < n - 2; b++) {
      const y = nums[b]
      if (b > a + 1 && nums[b] === nums[b - 1]) continue
      if (x + y + nums[b + 1] + nums[b + 2] > target) break
      if (x + y + nums[n - 1] + nums[n - 2] < target) continue
      let left = b + 1,
        right = n - 1
      while (left < right) {
        const sum = x + y + nums[left] + nums[right]
        if (sum > target) {
          right--
        } else if (sum < target) {
          left++
        } else {
          res.push([x, y, nums[left], nums[right]])
          left++
          while (nums[left] === nums[left - 1]) left++
          right--
          while (nums[right] === nums[right + 1]) right--
        }
      }
    }
  }
  return res
}
// let res = fourSum([-1,0,1,2,-1,-4], -1)
// console.log(res)
// @lc code=end
