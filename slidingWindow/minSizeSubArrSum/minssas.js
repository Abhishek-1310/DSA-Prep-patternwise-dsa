var minimumSizeSubarraySum = function (nums, target) {
    let lp = 0, sum = 0, minl = Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= target) {
            minl = Math.min(minl, i - lp + 1);
            sum -= nums[lp++];
        }
    }
    return minl === Infinity ? 0 : minl;
};