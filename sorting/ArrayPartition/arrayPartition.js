var arrayPartition = function (nums) {
    nums.sort((a, b) => a - b);
    let mSum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        mSum += nums[i];
    }
    return mSum;
};