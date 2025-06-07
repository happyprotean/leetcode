/*
 * @lc app=leetcode.cn id=20 lang=javascript
 * @lcpr version=30201
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let left = s.split('')
  let right = []
  while(left.length) {
    const c = left.pop()
    if (c === ')' || c === ']' || c === '}') {
      right.push(c)
    } else {
      const rc = right.pop()
      if (
        (rc === ')' && c === '(') ||
        (rc === '}' && c === '{') ||
        (rc === ']' && c === '[')
      ) {
        continue
      } else {
        return false
      }
    }
  }
  return left.length === 0 && right.length === 0
};
// @lc code=end



/*
// @lcpr case=start
// "()"\n
// @lcpr case=end

// @lcpr case=start
// "()[]{}"\n
// @lcpr case=end

// @lcpr case=start
// "(]"\n
// @lcpr case=end

// @lcpr case=start
// "([])"\n
// @lcpr case=end

 */

