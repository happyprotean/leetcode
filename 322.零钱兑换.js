/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 将物品的价值定义为1的话，最少硬币数可以转换为：恰好amount时，获取的最小价值
var coinChange = function (coins, amount) {
  const n = coins.length
  const memo = Array(amount + 1).fill(Infinity)
  memo[0] = 0
  for (let i = 0; i < coins.length; i++) {
    // 可以正序遍历
    for (let k = 0; k < amount + 1; k++) {
      if (coins[i] <= k) {
        memo[k] = Math.min(memo[k], memo[k - coins[i]] + 1)
      }
    }
  }
  const res = memo[amount]
  return res < Infinity ? res : -1
}
// @lc code=end
