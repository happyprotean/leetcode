/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0
  let res = 0,
    left = 0,
    cache = new Map() // 记录出现过的字符个数
  for (let right = 0; right < s.length; right++) {
    const num = cache.get(s[right]) || 0
    // 更新右端点
    cache.set(s[right], num + 1)
    // 更新左端点
    while (cache.get(s[right]) > 1) {
      cache.set(s[left], cache.get(s[left]) - 1)
      left++
    }
    res = Math.max(res, right - left + 1)
  }
  return res
}
let res = lengthOfLongestSubstring('pwwkew')
console.log(res)
// @lc code=end
