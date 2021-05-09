/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

var recoverTree = function(root) {
    var nodeX = null, nodeY = null;
    var prev = new TreeNode(-Infinity);

    const inorder = (node) => {
        if (node === null) return;

        inorder(node.left);
        if (node.val < prev.val && nodeX === null){
            nodeX = prev;
        }
        if (node.val < prev.val && nodeX != null){
            nodeY = node;
        }
        prev = node;
        inorder(node.right);
    }

    inorder(root);
    if (nodeX && nodeY){
        let tempVal = nodeX.val;
        nodeX.val = nodeY.val;
        nodeY.val = tempVal;
    }
};

// @lc code=end

