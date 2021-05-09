/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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

// 前序遍历为 中左右
// 后序遍历为 左右中，反序为 中右左
// 所以后序遍历可以使用前序遍历迭代算法的模板
// 只需更改左右子节点的入栈顺序，然后将结果逆序即可
var postorderTraversal = function(root) {
    if (root === null) return [];

    let result = [], stk = [];
    stk.push(root);
    while (stk.length) {
        root = stk.pop();
        result.push(root.val);
        if (root.left !== null){
            stk.push(root.left);
        }
        if (root.right !== null){
            stk.push(root.right);
        }
    }
    return result.reverse();
};
// @lc code=end

