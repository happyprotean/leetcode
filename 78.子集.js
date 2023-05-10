/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 从输出的角度思考
var subsets = function(nums) {
  let res = [], cur = []
  const len = nums.length
  const dfs = i => {
    // 每个回溯节点都需要记录答案
    res.push([...cur])
    for (let k = i; k < len; k++) {
      // 答案的第i个数字的枚举
      cur.push(nums[k])
      dfs(k+1)
      cur.pop()
    }
  }
  dfs(0)
  return res
};
// @lc code=end

let res = subsets([1, 2, 3])
console.log('res', res)

