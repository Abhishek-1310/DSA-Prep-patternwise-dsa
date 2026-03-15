var findPivotIndex = function (nums) {
    let totalSum = nums.reduce((sum, curr) => sum + curr, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        let rightsum = totalSum - leftSum - nums[i];
        if (leftSum === rightsum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};