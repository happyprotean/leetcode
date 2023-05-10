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
// 假设每个字符间有一个逗号，对每个逗号考虑选它/不选它，通过逗号将字符串分割
// 从答案的角度考虑，枚举第一个逗号的位置，枚举第二个逗号的位置...
var partition = function(s) {
  let res = [], cur = []
  const len = s.length
  const dfs = i => {
    if (i === len) {
      res.push([...cur])
      return
    }
    
    for (let k = i; k < len; k++) {
      const str = s.slice(i, k + 1)
      if (str === str.split('').reverse().join('')) {
        cur.push(str)
        dfs(k+1)
        cur.pop()
      }
    }
  } 
  dfs(0)
  return res
};
// @lc code=end

