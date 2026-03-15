var maximumProductSubarray = function (nums) {
    let currMaxPd = nums[0], currMinPd = nums[0], maxPdt = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            [currMaxPd, currMinPd] = [currMinPd, currMaxPd];
        }
        currMaxPd = Math.max(nums[i], currMaxPd * nums[i]);
        currMinPd = Math.min(nums[i], currMinPd * nums[i]);
        maxPdt = Math.max(maxPdt, currMaxPd)
    }
    return maxPdt;
};