/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * @lcpr version=30201
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   var cache = new Map()
   for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (cache.has(target - num)) {
      return [i, cache.get(target - num)]
    }
    cache.set(num, i)
   } 
};
// @lc code=end

// console.log(twoSum([2,7,11,15], 9))

/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */

