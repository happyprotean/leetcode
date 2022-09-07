/*
 * @lc app=leetcode.cn id=1592 lang=javascript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(s) {
  let wordCount = s => {
    return s.split(' ').filter(c => !!c).length
  }
  let spaceCount = s => {
    let res = 0
    for (const char of s) {
      if (char === ' ') {
        res += 1
      } 
    }
    return res
  }
  let wc = wordCount(s)
  let sc = spaceCount(s)
  let split = s.split(' ').filter(c => !!c)
  let num = wc === 1 ? 0 : Math.floor(sc / (wc - 1))
  let res = wc === 1 ? sc : sc - num * (wc - 1) 
  return split.join(' '.repeat(num)) + ' '.repeat(res)
};
// console.log('res', reorderSpaces(' hello') + '---')
// @lc code=end

