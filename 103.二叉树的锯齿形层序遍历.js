/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
// 注意每次访问节点时，是队列的先入先出方式，两次误写为栈
var zigzagLevelOrder = function(root) {
    if (root === null) return [];

    let result = [];
    let nodes = [];
    nodes.push(root);
    let leftToRight = true;
    while(nodes.length){
        let curResult = [];
        let num = nodes.length;
        for (let i = 0; i < num; ++i){
            let node = nodes.shift();
            if (leftToRight) {
                curResult.push(node.val);
            } else {
                curResult.unshift(node.val);
            }
            if (node.left) nodes.push(node.left);
            if (node.right) nodes.push(node.right);
        }
        result.push(curResult);
        leftToRight = !leftToRight;
    }
    return result;
};
// @lc code=end

