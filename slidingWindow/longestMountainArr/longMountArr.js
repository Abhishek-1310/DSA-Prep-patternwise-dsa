var longestMountainInArray = function (nums) {
    let maxM = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            let lp = i - 1, rp = i + 1;
            while (lp > 0 && nums[lp] > nums[lp - 1]) {
                lp--;
            }
            while (rp < nums.length - 1 && nums[rp] > nums[rp + 1]) {
                rp++;
            }
            maxM = Math.max(maxM, rp - lp + 1);
        }
    }
    return maxM;
};