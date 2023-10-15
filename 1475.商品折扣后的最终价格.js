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
var finalPrices = function(prices) {
  if (!prices || prices.length === 0) return []
  const n = prices.length
  const res = prices.slice()
  const stack = []
  for (let i = 0; i < n; i++) {
    const p = prices[i]
    while(stack.length && p <= prices[stack[0]]) {
      const t = stack.shift()
      res[t] = prices[t] - prices[i]
    }
    stack.unshift(i)
  }
  return res
};
// @lc code=end

