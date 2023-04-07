/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let res: number[] = [], cache: Map<number, number> = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num1: number = nums[i]
    const num2Index: number | undefined = cache.get(target - num1)
    if (num2Index !== undefined) {
      res.push(i)
      res.push(num2Index)
      break
    } else {
      cache.set(num1, i)
    }
  }
  return res
};
let nums = [2,7,11,15], target = 9
twoSum(nums, target)
// function twoSum(nums: number[], target: number): number[] {
//   let res: number[] = []
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         res.push(i)
//         res.push(j)
//       } 
//     }
//   }
//   return res
// };
// @lc code=end

