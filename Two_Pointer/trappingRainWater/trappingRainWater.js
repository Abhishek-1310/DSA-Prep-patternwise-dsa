function trappingRainWater(nums) {
    let trappingW = 0;
    let lp = 0, rp = nums.length - 1;
    let lMax = nums[lp], rMax = nums[rp];
    while (lp < rp) {
        if (lMax < nums[lp]) lMax = nums[lp];
        if (rMax < nums[rp]) rMax = nums[rp];
        if (nums[lp] < nums[rp]) {
            trappingW += lMax - nums[lp];
            lp++;
        } else {
            trappingW += rMax - nums[rp];
            rp--;
        }
    }

}
console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

