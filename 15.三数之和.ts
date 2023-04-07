/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  // 先对数组进行排序，便于双指针查找
  nums.sort((a, b) => a - b)
  let res: number[][] = []
  if (nums.length < 3) return []
  for (let i = 0; i < nums.length - 2; i++) {
    // 避免重复
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let j = i + 1, k = nums.length - 1
    while(j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]])
        j++
        while (j < k && nums[j] === nums[j - 1]) j++
        k--
        while (j < k && nums[k] === nums[k + 1]) k--
      } else if (sum > 0) {
        k--
      } else {
        j++
      }
    }
  }
  return res
}
let res = threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])
console.log(res)
// @lc code=end
