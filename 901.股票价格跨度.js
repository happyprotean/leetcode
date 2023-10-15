/*
 * @lc app=leetcode.cn id=901 lang=javascript
 *
 * [901] 股票价格跨度
 */

// @lc code=start

var StockSpanner = function() {
  this.stack = []
  this.id = 1
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  while (this.stack.length && price >= this.stack[0].price) {
    this.stack.shift()
  }
  let res = 1
  if (this.stack.length) {
    res = this.id - this.stack[0].index
  } else {
    res = this.id
  }
  this.stack.unshift({ price, index: this.id })
  this.id++
  return res
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end

