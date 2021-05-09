/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root === null) return 'X'
    const left = serialize(root.left)
    const right = serialize(root.right)
    return root.val + ',' + left + ',' + right
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let splitList = data.split(',')

    const buildTree = list => {
      const value = list.shift()
      if (value === 'X'){
        return null
      }
      const node = new TreeNode(value*1)
      node.left = buildTree(list)
      node.right = buildTree(list)
      return node
    }
    return buildTree(splitList)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

