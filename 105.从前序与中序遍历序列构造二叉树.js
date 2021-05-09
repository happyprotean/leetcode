/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || preorder.length === 0) return null;
    return buildTreeWithIndex(preorder, inorder, 0, preorder.length -1, 0, inorder.length - 1)
};

function buildTreeWithIndex(preorder, inorder, pLeft, pRight, iLeft, iRight){
    if (pLeft > pRight || iLeft > iRight) return null;
    let node = new TreeNode(preorder[pLeft]);
    const index = inorder.indexOf(node.val);
    const leftNum = index - iLeft;

    node.left = buildTreeWithIndex(preorder, inorder, pLeft + 1, pLeft + leftNum, iLeft, index - 1);
    node.right = buildTreeWithIndex(preorder, inorder, pLeft + leftNum + 1, pRight, index + 1, pRight);
    return node;
}
// @lc code=end

