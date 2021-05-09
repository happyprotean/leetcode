/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 const buildSortedTree = (nums, left, right) => {
    if (left > right) {
        return null
    };
    // 注意 （left + right) / 2 是小数，不能访问
    const mid = (left + right) >>> 1;
    const node = new TreeNode(nums[mid]);
    node.left = buildSortedTree(nums, left, mid - 1);
    node.right = buildSortedTree(nums, mid + 1, right);
    return node;
}

var sortedArrayToBST = function(nums) {
    // if (nums === null || nums.length === 0) return null;

    return buildSortedTree(nums, 0, nums.length - 1);

};
// @lc code=end

