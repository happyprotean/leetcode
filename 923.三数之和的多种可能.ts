/*
 * @lc app=leetcode.cn id=923 lang=typescript
 *
 * [923] 三数之和的多种可能
 */

// @lc code=start
function threeSumMulti(arr: number[], target: number): number {
  arr.sort((a, b) => a - b)
  let res: number = 0
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right]
      if (sum > target) {
        right--
      } else if (sum < target) {
        left++
      } else {
        if (arr[left] === arr[right]) {
          res += ((right - left) * (right - left + 1)) / 2
          break
        } else {
          let leftNum = 1
          let rightNum = 1
          left++
          while (arr[left] === arr[left - 1]) {
            left++
            leftNum++
          }
          right--
          while (arr[right] === arr[right + 1]) {
            right--
            rightNum++
          }
          res += leftNum * rightNum
        }
      }
    }
  }
  return res % (1000000000 + 7)
}
let res = threeSumMulti([1,1,2,2,3,3,4,4,5,5], 8)
console.log(res)
// @lc code=end
