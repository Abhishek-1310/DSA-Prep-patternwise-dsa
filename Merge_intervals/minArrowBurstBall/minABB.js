var minimumNumberOfArrowsToBurstBalloons = function (nums) {
    let arrw = 1;
    nums.sort((a, b) => a[1] - b[1]);
    let end = nums[0][1]
    for (let i = 1; i < nums.length; i++) {
        let st = nums[i][0];
        if (st > end) {
            arrw++;
            end = nums[i][1];
        }
    }
    return arrw;

};