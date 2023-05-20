/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */

function canPut(i, cur, n) {
  // 不在同一列
  if (cur.indexOf(i) > -1) return false
  let res = true
  for (let k = 0; k < cur.length; k++) {
    const element = cur[k];
    // 不在左上角
    if (cur.length + i === k + element) {
      res = false
      break
    } 
    // 不在右上角
    if (cur.length - i === k - element) {
      res = false
      break
    }
  }
  return res
}

var solveNQueens = function(n) {
  // cur表示[1,3,0,2]，每一行上皇后所在的列
  const res = [], cur = []
  const dfs = i => {
    if (i === n) {
      res.push([...cur])
      return
    }
    for (let k = 0; k < n; k++) {
      if (!canPut(k, cur, n)) continue
      cur.push(k)
      dfs(i + 1)
      cur.pop()
    }
  }
  dfs(0)
  return res.map(item => {
    return item.map(item2 => {
      const arr = new Array(n).fill('.')
      arr[item2] = 'Q'
      return arr.join('')
    })
  })
};
// @lc code=end

let res = solveNQueens(4)
console.log('res', res)

