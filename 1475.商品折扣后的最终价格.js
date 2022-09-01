/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
// 从末端遍历 + 单调栈
var finalPrices = function(prices) {
  let stack = []
  for(let i = prices.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] > prices[i]) {
      stack.pop()
    }
    if (stack.length === 0) {
      stack.push(prices[i])
    } else {
      const value = stack[stack.length - 1]
      stack.push(prices[i])
      prices[i] = prices[i] - value
    }
    
  }
  return prices
};
// @lc code=end

