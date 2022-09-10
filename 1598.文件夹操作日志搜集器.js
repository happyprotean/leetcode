/*
 * @lc app=leetcode.cn id=1598 lang=javascript
 *
 * [1598] 文件夹操作日志搜集器
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let res = 0
  for (const log of logs) {
    if (log === '../') {
      res === 0
        ? res = 0
        : res -= 1
    } else if (log === './') {
      continue
    } else {
      res += 1
    }
  }
  return res
};
// @lc code=end

