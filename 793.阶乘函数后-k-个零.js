/*
 * @lc app=leetcode.cn id=793 lang=javascript
 *
 * [793] 阶乘函数后 K 个零
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function(k) {
  return help(k + 1) - help(k)
};

// 5第一次出现了k次的位置
const help = k => {
  let r = 5 * k
  let l = 0
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (numberOf5(mid) < k) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return r + 1
}

const numberOf5 = x => {
  let res = 0
  while (x !== 0) {
    res += Math.floor(x / 5)
    x = Math.floor(x / 5)
  }
  return res
}

// @lc code=end

