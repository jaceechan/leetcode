// 冒泡算法

function bubbleSort(arr) {
  // 外循环，主要拿到i, 给内循环用
  for (let i = 0; i < arr.length; i++) {
    let done = true
    // 因为需要获取到j + 1的值，所以arr < length - 1 
    // 因为每次外出循环，都会把最大沉底，所以 - i
    // 每次只需要比较没比较完成的数据
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        done = false
      }
    }
    if (done) {
      break
    }
  }
  console.log('sorted arr', arr)
  return arr
}

sort([5, 9, 1, 0, 6, 7, 3, 4])