var contiguousArray = function (nums) {
    let map = new Map();
    let sum = 0;
    let maxSum = 0;
    map.set(0, -1);
    for (let i = 0; i < nums.length; i++) {
        nums[i] == 0 ? sum += -1 : sum += 1;
        if (map.has(sum)) {
            maxSum = Math.max(maxSum, i - map.get(sum))
        } else {
            map.set(sum, i);
        }
    }
    return maxSum;
};