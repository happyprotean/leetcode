// 寻找数组中第一个不小于target的元素
// 闭区间循环
export function low_bound(nums, target) {
  if (nums.length === 0) return -1
  let left = 0, right = nums.length - 1
  while (left <= right) { // [left, right]
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] < target) {
      left = mid + 1 // [mid + 1, right]
    } else {
      // num[mid] = target时，需要收缩右端点
      // 收缩左端点的话，会找不到下界，如[8, 8, 8, 8], target=8
      right = mid - 1 // [left, mid - 1]
    }
  }
  // 1. 数组中存在正常下界，此时left的位置为目标值的下界
  // 2. 数组元素均小于target，此时left为nums.length
  // 3. 数组元素均大于target，此时left为0
  return left
}

// 左闭右开循环
export function low_bound2(nums, target) {
  if (nums.length === 0) return -1
  let left = 0, right = nums.length
  while (left < right) { // [left, right)
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] < target) {
      left = mid + 1 // [mid + 1, right)
    } else {
      right = mid // [left, mid)
    }
  }
  // 1. 数组中存在正常下界，此时left的位置为目标值的下界
  // 2. 数组元素均小于target，此时left为nums.length
  // 3. 数组元素均大于target，此时left为0
  return left
}

// 左开右开循环
export function low_bound3(nums, target) {
  if (nums.length === 0) return -1
  let left = -1, right = nums.length
  while (left + 1 < right) { // (left, right)
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] < target) {
      left = mid // (mid, right)
    } else {
      right = mid // (left, mid)
    }
  }
  // 1. 数组中存在正常下界，此时left的位置为目标值的下界
  // 2. 数组元素均小于target，此时left为nums.length
  // 3. 数组元素均大于target，此时left为0
  return right
}