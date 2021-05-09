/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    let result = [];
    let stk = [];
    while (root || stk.length){
        while (root){
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        result.push(root.val);
        root = root.right;
    }
    return result;
};

// var inorderTraversal = function(root) {
//     let result = [];
//     const inorder = (node) => {
//         if (node === null) return;
//         inorder(node.left);
//         result.push(node.val);
//         inorder(node.right);
//     }

//     inorder(root);
//     return result;
// };
// @lc code=end

