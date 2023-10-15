/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function(temperatures) {
  if (!temperatures || temperatures.length < 1) return []
  const stack = []
  const n = temperatures.length
  const ans = new Array(n).fill(0)  // 提前创造出数组元素，后续直接修改即可，不需要调用push，耗时长
  // 从左到右遍历
  for (let i = 0; i < n; i++) {
    const t = temperatures[i]
    while(stack.length && t > temperatures[stack[0]]) {
      ans[stack[0]] = i - stack[0]
      stack.shift()
    } 
    stack.unshift(i)
  }
  return ans
};

const res = dailyTemperatures([99, 99, 99, 99, 99, 99, 100])
console.log(res)



var dailyTemperaturesRL = function(temperatures) {
  if (!temperatures || temperatures.length < 1) return []
  const stack = []
  const n = temperatures.length
  const ans = new Array(n).fill(0)  // 提前创造出数组元素，后续直接修改即可，不需要调用push，耗时长
  // 从右向左遍历
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && temperatures[i] >= temperatures[stack[0]]) {
      stack.shift()
    }
    if (stack[0] !== undefined) {
      ans[i] = stack[0] - i
    }
    stack.unshift(i)
  }
  return ans
};

// 暴力解法
var dailyTemperaturesViolence = function(temperatures) {
  if (!temperatures || temperatures.length < 1) return []
  const ans = []
  for (let i = 0; i < temperatures.length; i++) {
    let lastIndex = i
    for (let k = i + 1; k < temperatures.length; k++) {
      if (temperatures[k] > temperatures[i]) {
        lastIndex = k
        break
      }
    } 
    ans.push(lastIndex - i)
  }
  return ans
};
// @lc code=end

