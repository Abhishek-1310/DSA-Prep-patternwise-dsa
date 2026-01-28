var minimumAbsoluteDifference = function (nums) {
    nums.sort((a, b) => a - b);
    let min = Infinity;
    let result = [];
    for (let i = 1; i < nums.length; i++) {
        let diff = nums[i] - nums[i - 1]
        if (diff < min) {
            min = nums[i] - nums[i - 1];
            result = [[nums[i - 1], nums[i]]]
        } else if (diff === min) {
            result.push([nums[i - 1], nums[i]]);
        }
    }
    return result;
};