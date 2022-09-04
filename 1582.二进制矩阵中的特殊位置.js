/*
 * @lc app=leetcode.cn id=1582 lang=javascript
 *
 * [1582] 二进制矩阵中的特殊位置
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  let row = {}, col = {}
  for(let i = 0; i < mat.length; i++) {
    for(let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        row[i] ? row[i] = row[i] + 1 : row[i] = 1
        col[j] ? col[j] = col[j] + 1 : col[j] = 1
      }
    }
  }
  let res = 0
  for(let i = 0; i < mat.length; i++) {
    for(let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1 && row[i] === 1 && col[j] === 1) {
        res += 1
      }
    }
  }
  return res
};
// @lc code=end

