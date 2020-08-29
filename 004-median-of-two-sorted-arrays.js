/* 
https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
难度: 困难

给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
你可以假设 nums1 和 nums2 不会同时为空。


示例 1:
nums1 = [1, 3]
nums2 = [2]
则中位数是 2.0

示例 2:
nums1 = [1, 2]
nums2 = [3, 4]
则中位数是 (2 + 3)/2 = 2.5

 */


/**
 * 时间复杂度为：O((m + n)log(m + n))，时间复杂度未达到O(log(m + n))，需要再优化
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays1 = function(nums1, nums2) {
    const arr = nums1.concat(nums2).sort((a, b) => a - b)
    const l = arr.length
    const index = Math.floor(l / 2)
    console.log(arr, index)
    if (l === 1) {
        return arr[0]
    } else if (l % 2) {
        return arr[index]
    } else {
        return (arr[index - 1] + arr[index]) / 2
    }
};

// 运行时间：276 ms	内存消耗：48.4 MB

console.log('[1,3], [2]', findMedianSortedArrays1([1,3], [2]))
console.log('[1, 2], [3, 4]', findMedianSortedArrays1([1,2 ], [3, 4]))
console.log('[1, 8, 5], [10, 2]', findMedianSortedArrays1([1, 8, 5], [10, 2]))

/**
 * 二分法处理
 * 参考：
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/4xun-zhao-liang-ge-zheng-xu-shu-zu-de-zhong-wei--3/
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/er-fen-fa-duo-yu-yan-javajs4-xun-zhao-liang-ge-zhe/
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/javascript-san-chong-shi-jian-fu-za-du-by-yujie-3/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays2 = function(nums1, nums2) {
    //TODO
};

console.log('[1,3], [2]', findMedianSortedArrays2([1,3], [2]))
console.log('[1, 2], [3, 4]', findMedianSortedArrays2([1,2 ], [3, 4]))
console.log('[1, 8, 5], [10, 2]', findMedianSortedArrays2([1, 8, 5], [10, 2]))