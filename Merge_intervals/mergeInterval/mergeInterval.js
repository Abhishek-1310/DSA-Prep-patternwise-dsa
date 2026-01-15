var mergeIntervals = function (nums) {
    nums.sort((a, b) => a[0] - b[0]);
    let result = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        let [currSt, currlt] = nums[i];
        let last = result[result.length - 1];
        if (last[1] >= currSt) {
            last[1] = Math.max(last[1], currlt);
        } else {
            result.push(nums[i])
        }
    }
    return result;

};