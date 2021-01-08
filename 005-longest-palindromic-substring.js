/*
https://leetcode-cn.com/problems/longest-palindromic-substring/

难度: 中等

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome1 = function(s) {
	const strings = []
	let palindrome = ''
	s.split('').forEach((word, index) => {
		if (!palindrome) {
			palindrome = word
		}
		for (let i = 0; i < index; i++) {
			strings.push(s.slice(index, i + 1))
		}
	})

	strings.forEach((str, index) => {
		if (!index) {
				
		}

	})

};