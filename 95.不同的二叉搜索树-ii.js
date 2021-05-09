/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) return [];

    const buildTree = (start, end) => {
        let result = [];
        if (start > end) return [null];
        for (let i = start; i <= end; ++i){
            let leftTree = buildTree(start, i - 1);
            let rightTree = buildTree(i + 1, end);
            for (const leftNode of leftTree){
                for (const rightNode of rightTree){
                    let node = new TreeNode(i);
                    node.left = leftNode;
                    node.right = rightNode;
                    result.push(node);
                }
            }
        }
        return result;
    }
    return buildTree(1, n);
};

// @lc code=end

