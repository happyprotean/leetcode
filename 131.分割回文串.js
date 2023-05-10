/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
// 从输入的角度考虑，对每个逗号，选或不选
var partition = function(s) {
  let res = [], cur = []
  const len = s.length
  // start 表示当前这段回文子串的开始位置
  const dfs = (i, start) => {
    if (i === len) {
      res.push([...cur])
      return
    }

    // 不选 i 和 i+1 之间的逗号（i=n-1 时右边没有逗号）
    if (i < len - 1) {
      dfs(i+1, start)
    }
  
    // 选 i 和 i+1 之间的逗号
    const str = s.slice(start, i + 1)
    if (str === str.split('').reverse().join('')) {
      cur.push(str)
      dfs(i+1, i+1)
      cur.pop()
    }
  } 
  dfs(0, 0)
  return res
};
// @lc code=end

