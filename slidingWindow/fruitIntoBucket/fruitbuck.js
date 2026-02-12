var fruitsIntoBaskets = function (nums) {
    let map = new Map();
    let maxLen = 0;
    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        map.set(nums[r], (map.get(nums[r]) || 0) + 1);

        while (map.size > 2) {
            map.set(nums[l], map.get(nums[l]) - 1);
            if (map.get(nums[l]) === 0) {
                map.delete(nums[l]);
            }
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
};