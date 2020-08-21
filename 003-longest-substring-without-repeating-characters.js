/* 
https://leetcode-cn.com/problems/add-two-numbers/
难度: 中等

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

输入: " "
输出: 1
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function(s) {
  let max = 0
  const srtArr = s.split('') 
  srtArr.forEach((word, index) => {
      const words = {}
      let count = 0
      for (var i = index; i < s.length; i++) {
          if (words[srtArr[i]] !== undefined) break
       
          words[srtArr[i]] = index
          count++ 
          
          if (count > max) {
              max = count
          }
      }
  })
  return max
};

console.log('abcabcbb', lengthOfLongestSubstring1('abcabcbb'))
console.log('abcabcbb', lengthOfLongestSubstring1('bbbbb'))
console.log('abcabcbb', lengthOfLongestSubstring1('pwwkew'))
console.log('abcabcbb', lengthOfLongestSubstring1(' '))