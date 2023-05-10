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
  let res = [], len = digits.length
  let cur = new Array(digits.length).fill('')
  // 表示当前遍历到digits的第i位
  const dfs = i => {
    if (i === len) {
      res.push(cur.join(''))
      return
    }
    const chars = num2char[Number(digits[i])]
    // 第i位依次枚举
    for (let k = 0; k < chars.length; k++) {
      cur[i] = chars[k]
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

