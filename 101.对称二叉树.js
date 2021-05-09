/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
// 迭代版本
var isSymmetric = function(root) {
    if (root === null) return true;
    if (root.left === null && root.right === null) return true;

    let nodeList = new Array();
    nodeList.push(root.left, root.right);
    while(nodeList.length){
        let left = nodeList.shift();
        let right = nodeList.shift();
        if (left === null && right === null){
            continue;
        }
        if (left === null || right === null) return false;
        if (left.val !== right.val) return false;
        nodeList.push(left.left, right.right);
        nodeList.push(left.right, right.left);
    }
    return true;
};

// 递归版本
// var isSymmetric = function(root) {
//     const isSame = (nodeX, nodeY) => {
//         if (nodeX === null && nodeY === null) return true;
//         if (nodeX && nodeY === null) return false;
//         if (nodeY && nodeX == null) return false;
//         if (nodeX.val !== nodeY.val){
//             return false;
//         } else {
//             return isSame(nodeX.left, nodeY.right) 
//                 && isSame(nodeX.right, nodeY.left);
//         }
//     }
//     if (root === null) return true;
//     return isSame(root.left, root.right);
// };
// @lc code=end

