/*
 * @lc app=leetcode.cn id=2110 lang=javascript
 *
 * [2110] 股票平滑下跌阶段的数目
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 双指针寻找股票平滑下跌的区间
var getDescentPeriods = function(prices) {
  let res = 0
  for(let i = 0; i < prices.length;){
    let yesterday = prices[i], j = i + 1
    while (j < prices.length && prices[j] === yesterday - 1){
      yesterday = prices[j]
      j++
    }
    res += (j - i - 1) * (j - i) / 2
    i = j
  }
  res += prices.length
  return res
};
// @lc code=end

