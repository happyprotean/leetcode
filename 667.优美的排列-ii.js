/*
 * @lc app=leetcode.cn id=667 lang=javascript
 *
 * [667] 优美的排列 II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
  let ans = []
  for(let i = 1; i <= k; i++) {
    if (i % 2 === 1) {
      ans.push((i + 1) / 2)
    } else {
      ans.push(n - i / 2 + 1)
    }
  }
  let tmp = []
  for(let i = Math.ceil(k / 2) + 1; i <= n - Math.floor(k / 2); i++){
    tmp.push(i)
  }
  return k % 2 === 1 ? ans.concat(tmp) : ans.concat(tmp.reverse())
};
// @lc code=end

