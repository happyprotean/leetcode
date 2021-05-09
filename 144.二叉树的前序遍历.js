/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (root === null) return [];
    
    let result = [];
    let stk = [];
    stk.push(root);
    while (stk.length) {
        root = stk.pop();
        result.push(root.val);
        if (root.right !== null){
            stk.push(root.right);
        }
        if(root.left !== null){
            stk.push(root.left);
        }
    }
    return result;
};
// @lc code=end

