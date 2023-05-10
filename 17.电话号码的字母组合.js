/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return []
  const num2char = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 最终结果
  let res = [], len = digits.length
  // 某个回溯分支的结果
  let cur = new Array(digits.length).fill('')
  // 表示当前遍历到digits的第i位
  const dfs = i => {
    // 递归结束，将回溯分支结果记录
    if (i === len) {
      res.push(cur.join(''))
      return
    }
    const chars = num2char[Number(digits[i])]
    // 第i位依次枚举
    for (const char of chars) {
      cur[i] = char
      // 遍历digits的第i+1位
      dfs(i+1)
    }
  }
  dfs(0)
  return res
};
// @lc code=end
let res = letterCombinations('23')
console.log('res', res)

