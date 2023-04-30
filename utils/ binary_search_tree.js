/**
 * 二叉搜索树：任意节点的值大于所有左子节点的值，且要小于所有右子节点的值
 */
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// BST遍历框架
function tranverse(root, target) {
  if (root.val === target) {
    // root操作
  }
  if (root.val > target) {
    tranverse(root.left, target)
  }
  if (root.val < target) {
    tranverse(root.right, target)
  }
}

// 二叉搜索树有效性判断
function isValidBST(root) {
  function tranverse(node, min, max) {
    if(node === null) return true
    if(min !== null && node.val <= min) return false
    if(max !== null && node.val >= max) return false
    return tranverse(node.left, min, node.val) && tranverse(node.right, node.val, max) 
  }
  return tranverse(root, null, null)
}

// 在BST中查找一个数是否存在
function isInBST(root, target) {
  if(root === null) return false
  if(root.val === target) return true
  if(root.val > target) return isInBST(root.left)
  if(root.val < target) return isInBST(root.right)
}

// 在BST中插入一个数
function insertIntoBST(root, val) {
  if(root === null) return new TreeNode(val)
  if(root.val === val) return root
  if(root.val > target) {
    root.left = insertIntoBST(root.left, val)
  }
  if(root.val < target) {
    root.right = insertIntoBST(root.right, val)
  }
  return root
}

// 在BST中删除一个数
function deleteNode(root, val) {
  function getMin(node) {
    while(node.left !== null) {
      node = node.left
    }
    return node
  }
  if(root === null) return null
  if(root.val === val) {
    if(root.left === null) return root.right
    if(root.right === null) return root.left
    // 使用右子树中的最小值替换当前节点
    const minNode = getMin(root.right)
    root.val = minNode.val
    root.right = deleteNode(root.right, minNode.val)
  }
  if(root.val > target) {
    root.left = deleteNode(root.left, val)
  }
  if (root.val < target) {
    root.right = deleteNode(root.right, val)
  }
  return root
}
