/*
 * @lc app=leetcode.cn id=1190 lang=javascript
 *
 * [1190] 反转每对括号间的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  let stack = []
  for (const char of s) {
    if (char !== ')') {
      stack.push(char)
    } else {
      let str = ''
      while(stack.length && stack[stack.length - 1] !== '(') {
        str += stack.pop()
      }
      if (stack.length) stack.pop()
      stack = stack.concat(str.split(''))
    }
  }
  return stack.join('')
};

// @lc code=end

