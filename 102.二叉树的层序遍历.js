/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return [];

    let result = new Array();
    let nodes = new Array();
    nodes.push(root);
    while (nodes.length){
        let num = nodes.length;
        let curResult = new Array();
        for (let i = 0; i < num; ++i){
            let node = nodes.shift();
            curResult.push(node.val);
            if (node.left) nodes.push(node.left);
            if (node.right) nodes.push(node.right);
        }
        result.push(curResult);
    }
    return result;
};
// @lc code=end

