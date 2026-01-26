var longestMountainInArray = function (nums) {
    let ans = 0, len = nums.length;
    if (len < 3) return 0;
    for (let i = 1; i < len - 1; i++) {

        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            let l = i - 1;
            let r = i + 1;
            while (l > 0 && nums[l] > nums[l - 1]) {
                l--;
            }
            while (r < nums.length - 1 && nums[r] > nums[r + 1]) {
                r++;
            }
            ans = Math.max(ans, r - l + 1);
        }
    }
    return ans;
};