/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 使用一个map记录曾经计算过的结果，避免重复计算
// 由于特殊性，本体可以使用array代替map
var numTrees = function(n) {
    if (n <= 1) return 1;

    let record = new Array(n + 1);
    const calNumTrees = num => {
        if (num <= 1) return 1;
        if (record[num]){
            return record[num];
        } else {
            let curNum = 0;
            for (let i = 1; i <= num; ++i){
                curNum += calNumTrees(num - i) * numTrees(i - 1);
            }
            record[num] = curNum;
            return curNum;
        }
    }
    return calNumTrees(n);
};

// var numTrees = function(n) {
//     if (n <= 1) return 1;

//     let result = 0;
//     for (let i = 1; i <= n; ++i){
//         result += numTrees(n - i) * numTrees(i - 1);
//     }
//     return result;
// };
// @lc code=end

