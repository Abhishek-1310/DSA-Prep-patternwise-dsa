var sortColors = function (nums) {
    let l = 0, m = 0, h = nums.length - 1;
    while (m <= h) {
        if (nums[m] === 0) {
            [nums[l], nums[m]] = [nums[m], nums[l]];
            m++;
            l++;
        } else if (nums[m] === 1) {
            m++;
        } else {
            [nums[h], nums[m]] = [nums[m], nums[h]];
            h--;
        }
    }
};