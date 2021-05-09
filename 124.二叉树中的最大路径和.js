/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */

let maxVal;

var maxPathSum = function(root) {
    if (root === null) return 0;
    maxVal = -Infinity;
    dfs(root);
    return maxVal;

};

/**
 * dfs 返回经过root节点，能够提供的最大和
 * maxVal 以root为根的最大路径
 */
var dfs = function(root){
    if (!root) return 0;
    var left = Math.max(0, dfs(root.left));
    var right = Math.max(0, dfs(root.right));
    maxVal = Math.max(maxVal, root.val + left + right);
    var ret = root.val + Math.max(left, right);
    return ret > 0 ? ret : 0;
}

// function dfs(node){
//     if (!node) return 0;

//     const left = dfs(node.left);
//     const right = dfs(node.right);
//     const cur = node.val + Math.max(0, left) + Math.max(0, right);
//     maxVal = Math.max(maxVal, cur);

//     return Math.max(left, right, 0) + node.val;
// }
// @lc code=end

