/*
 * @lc app=leetcode.cn id=2073 lang=javascript
 * @lcpr version=30201
 *
 * [2073] 买票需要的时间
 */

// @lc code=start
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
  let res = 0
  let index = k
  while(tickets[index] >= 1) {
    const first = tickets[0]
    // 队首为第k个人，且需购买票数只有1张是，需要跳出循环
    if (index === 0 && first === 1) {
      res += 1
      break
    }
    if (first > 1) {
      // 队首的人需购买票数大于1，需要弹出第一个元素，并且减一后添加到队尾
      tickets.shift()
      tickets.push(first - 1)
    } else {
      // 队首的人需购买票数为1，直接弹出第一个元素
      tickets.shift()
    }
    res += 1
    index--
    // 队首的人为第k个人
    index = index < 0 ? tickets.length - 1 : index
  }
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [2,3,2]\n2\n
// @lcpr case=end

// @lcpr case=start
// [5,1,1,1]\n0\n
// @lcpr case=end

 */

