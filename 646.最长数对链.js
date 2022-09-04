/*
 * @lc app=leetcode.cn id=646 lang=javascript
 *
 * [646] 最长数对链
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
// 动态规划
// dp[i]表示以pair[i]为结尾的数对链长度
var findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[0]- b[0])
  let len = pairs.length
  let dp = new Array(len).fill(1)
  for(let i = 0; i < len; i++){
    for(let j = 0; j < i; j++) {
      if (pairs[i][0] > pairs[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return dp[dp.length - 1]
};
// 贪心算法：优先选择第二个数最小的数对
// var findLongestChain = function(pairs) {
//   pairs.sort((a, b) => a[1] - b[1])
//   let res = 0
//   let cur = -Infinity
//   for (const pair of pairs) {
//     if (pair[0] > cur) {
//       cur = pair[1]
//       res += 1
//     }
//   }
//   return res
// };
// @lc code=end

