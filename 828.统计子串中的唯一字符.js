/*
 * @lc app=leetcode.cn id=828 lang=javascript
 *
 * [828] 统计子串中的唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 直接计算区间内字符对总结果的贡献度
 var uniqueLetterString = function(s) {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    let l = i - 1, r = i + 1
    while(l >= 0 && s[l] !== s[i]) l--
    while(r < s.length && s[r] !== s[i]) r++
    res += (i - l) * (r - i)
  }
  return res
};
// 暴力解法会超时
// var uniqueLetterString = function(s) {
//   const countUniqueChars = s => {
//     if (s.length === 0) return 0
//     let cache = {}, res  = 0
//     for (const char of s) {
//       if (cache[char]) {
//         cache[char] += 1
//       } else {
//         cache[char] = 1
//       }
//     }
//     for (const key of Object.keys(cache)) {
//       if (cache[key] === 1) res += 1
//     }
//     return res
//   }
//   if (s.length === 0) return 0
//   let res = 0
//   for(let i = 0; i < s.length; i++){
//     for(let j = 0; j < s.length; j++){
//       res += countUniqueChars(s.slice(i, j + 1))
//     }
//   }
//   return res
// };
console.log('test', uniqueLetterString('PNJBRGRPQSLSXPQBQKGGTUSHTKLLXHGXZBDMHNBZXKWZXTAANMHTOIRXHEYANOPLBVJROVZUDZNMETKKXRDMRHVMLDBHQTRIYGQFMBTZPPXGCLRJJYWHZZURDNTKWPNHLEJHFPPVQJAGSZCNUDMZWWCYUAQZGTUDMPJKLUQOSESLYGYWZKIXJQGHSOCVJQIGVXWQLOYUGFHCJSCJGHQMIGLGYAZWELSHZAPAEZQGMCMRMFRFZTTDGQUIZYDUCBVXZZUIDDCNWUAAPDUNZLBAGNIFNDBJYALQQGBRAMHBIVVERVXRTCSZSZWIGRLWZMUTEYSWZAGUDTPVLRJMOBUHOZBGHKHVOXAWCXMJNAZLQLKQQQNOCLUFGKOVBOKVKOEZEKNWHCFGCENVAABLPVTCEJVZNDTZNCRELHEDWLWIQGDBDGCTGUBZCZGTOVUFNCICJLWSMFDCRQEAGHUEVYEXQDHFFIKVECUAZRELOFJMYJJZNNJDKIMBKLRHSJUSBSTQHVLEJTJCCZQNZBVYFZXGAUDYOSCKYSMMINOANJMBAFHTNBRRZQAGLLWXLXMJANYFELMWRUFTLZUUHBSJEXOOBJKMYMLITIWJTDXSCOTZVZNVIXPDHNSXSODIEATIPIAODGCMDGYVZRJRVFCCMECCHXTIRAIQIJOWZWNRVRKOSIMQSDYRSCBONPPJTEYOEBNUOMRBIFRBQBTECLFQZTBBYROOMREHVFWTRVCODLLGJCTGUXEICJOUDMXBEVZRVRAVKIDNRICWSBNXMXVDCKZAHMQZBRLQUGTMJVOQBXARMLGJEQCORHNODVNOQFOMDPKRCOQOUDCPEOCHKHNHDGHBBYJIIYRVPKVSDYDIWOWCTGDZEHQAFDSZHJKTAYAYQCFVNAJQUQUQGFTPTRYAMLLXNSYSISFBEFNTDJWHZBWRVKRIHQXUOFBHRJKRIGJLDKRMUJQWAJGUFKSQEKMFAIJZSJIOTMCIVROAOEQPOIUD'))
// @lc code=end

