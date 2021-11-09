function twoSum (num, target) {
  let output = []
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      const sum = num[i] + num[j]
      if (sum === target) {
        output.push(num[i], num[j])
      }
    }
  }
  return output
}

console.log(twoSum([2, 7, 11, 15], 13)) // 13, Output result function [0, 2]
console.log(twoSum([3, 2, 4], 6)) // 6, Output result function [1, 2]
