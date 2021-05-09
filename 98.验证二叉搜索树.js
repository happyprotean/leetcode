/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
// 左右子树均为 二叉搜索树
// 且当前节点值 大于左子树最大值 小于右子树最小值
var isValidBST = function(root) {
    if (root === null) return true;

    let leftMax = -Infinity;
    let rightMin = Infinity;
    if (root.left){
        let node = root.left;
        while (node.right){
            node = node.right;
        }
        leftMax = node.val;
    }
    if (root.right){
        let node = root.right;
        while(node.left){
            node = node.left;
        }
        rightMin = node.val;
    }

    return isValidBST(root.left)
        && isValidBST(root.right)
        && root.val > leftMax
        && root.val < rightMin
};
// @lc code=end

