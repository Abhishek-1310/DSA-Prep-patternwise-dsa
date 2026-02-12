var longestContinuousIncreasingSubsequence = function (nums) {
    let currl = 1, maxl = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currl++;
            maxl = Math.max(currl, maxl);
        } else {
            currl = 1;
        }
    }
    return maxl;
};