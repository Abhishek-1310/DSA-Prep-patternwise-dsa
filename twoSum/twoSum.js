// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// sum should be 
const num = [3, 2, 4];
// const arr = [5,4,9,7,1,2,3]

// const arr = [10,2,1]
// if sum < target move left++ and sum>target move right-- if sum == target return indices
const target = 6;
console.log(twoSum(num, target));
function twoSum(num, tar) {
    const arr1 = num.map((value, index) => ({ value, index })).sort((a, b) => a.value - b.value)
    let left = 0, right = arr1.length - 1;
    while (left < right) {
        let sum = arr1[left].value + arr1[right].value;
        if (sum > target) {
            console.log("move backward");
            right--;
        } else if (sum < target) {
            console.log("move forward");
            left++;
        } else {
            console.log(`value are ${arr1[left].value} and ${arr1[right].value}`)
            return [arr1[left].index, arr1[right].index];
        }
    }
}

