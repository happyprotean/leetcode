class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function countNodes(root) {
  let l = root, r = root
  let hl = 0, hr = 0
  while(l !== null) {
    l = l.left
    hl++
  }
  while(r !== null) {
    r = r.right
    hr++
  }
  if (hl === hr) {
    return Math.pow(2, hl) - 1
  }
  return 1 + countNodes(root.left) + countNodes(root.right)
}