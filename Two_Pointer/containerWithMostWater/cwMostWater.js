function cwMostWater(nums) {
    let maxWater = 0;
    let lp = 0, rp = nums.length - 1;
    while (lp < rp) {
        let width = rp - lp;
        let currWater = Math.min(nums[lp], nums[rp]) * width;

        if (currWater > maxWater) maxWater = currWater;

        (nums[lp] < nums[rp]) ? lp++ : rp--;
    }
    return maxWater;

}
console.log(cwMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));