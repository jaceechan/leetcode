/* 
https://leetcode-cn.com/problems/two-sum/
难度: 简单
 
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/


 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
  const l = nums.length
  for (var i = 0; i < l - 1; i++) {
    for (var j = i + 1; j < l; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
};

console.log(twoSum1([2, 7, 11, 15], 9));
console.log(twoSum1([2, 7, 11, 15], 26));


 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(nums, target) {
  const existValues = {}
  for (var i = 0; i < nums.length; i++) {
    const currentValue = nums[i]
    const delta = target - currentValue
    if (existValues[delta] !== undefined) return [existValues[delta], i]
    existValues[currentValue] = i
  }
};

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([2, 7, 11, 15], 26));

/* 
官方题解：3种方法：https://leetcode-cn.com/problems/two-sum/solution/liang-shu-zhi-he-by-leetcode-2/
1.暴力法 —— twoSum1
2.两遍哈希表
3.一遍哈希表 —— twoSum2
 */
