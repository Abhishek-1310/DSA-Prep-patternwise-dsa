var maximumAverageSubarrayI = function (nums, k) {
    let lp = 0, maxAvg = -Infinity, sum = 0;

    for (let rp = 0; rp < nums.length; rp++) {
        sum += nums[rp];
        if (rp - lp + 1 === k) {
            maxAvg = Math.max(maxAvg, sum / k);
            sum -= nums[lp];
            lp++;
        }
    }
    return maxAvg; // may be sometime **parseFloat(maxAvg)**
};