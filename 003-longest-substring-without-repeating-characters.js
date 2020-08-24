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

// lengthOfLongestSubstring2: 运行时间: 668 ms 内存消耗: 58.3 MB
	

console.log('abcabcbb', lengthOfLongestSubstring1('abcabcbb'))
console.log('bbbbb', lengthOfLongestSubstring1('bbbbb'))
console.log('pwwkew', lengthOfLongestSubstring1('pwwkew'))
console.log(' ', lengthOfLongestSubstring1(' '))
console.log('', lengthOfLongestSubstring1(''))

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function(s) {
  let startIndex = 0
  let wordMap = {}
  let max = 0

  s.split('').forEach((word, index) => {
      let preIndex = wordMap[word]
      let count = 0
      wordMap[word] = index
    
      if (preIndex === undefined || preIndex < startIndex) {
        count = index - startIndex + 1
        if (count > max) {
            max = count
        }
      } else {
        startIndex = preIndex + 1
      }  
  })
  return max
}

console.log('abcabcbb', lengthOfLongestSubstring2('abcabcbb'))
console.log('bbbbb', lengthOfLongestSubstring2('bbbbb'))
console.log('pwwkew', lengthOfLongestSubstring2('pwwkew'))
console.log(' ', lengthOfLongestSubstring2(' '))
console.log('', lengthOfLongestSubstring2(''))

// lengthOfLongestSubstring2: 运行时间: 160ms 内存消耗: 44MB

// TODO 思考如何达到100ms

/* 
官方题解：2种方法：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/wu-zhong-fu-zi-fu-de-zui-chang-zi-chuan-by-leetc-2/
1.暴力法 —— lengthOfLongestSubstring1
2.滑动窗口 —— lengthOfLongestSubstring2

其他警精选题解: 3种方法: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/zi-jie-leetcode3wu-zhong-fu-zi-fu-de-zui-chang-zi-/
1. 维护数组
2. 维护下标
3. 优化Map 
*/