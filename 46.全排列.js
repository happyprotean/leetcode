/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const n = nums.length, res = [], cur = []
  const selected = {}
  const dfs = (i) => {
    if (i === n) {
      res.push([...cur])
      return
    }
    for (let j = 0; j < nums.length; j++) {
      const element = nums[j];
      if (selected[element]) continue
      selected[element] = 1
      cur.push(element)
      dfs(i + 1)
      cur.pop()
      selected[element] = 0
    }
  }
  dfs(0)
  return res
};
// @lc code=end

