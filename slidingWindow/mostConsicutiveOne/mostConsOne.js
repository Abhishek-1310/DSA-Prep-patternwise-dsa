var findMaxConsecutiveOnes = function (nums) {
    let currentCount = 0;
    let maxCount = 0;

    for (let num of nums) {
        if (num === 1) {
            currentCount++;
        } else {
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 0;
        }
    }
    return Math.max(maxCount, currentCount);
};
// simpler version
var maxConsecutiveOnes = function (nums) {
    let maxCount = 0, currCount = 0;

    for (let num of nums) {
        if (num === 1) {
            currCount++;
            maxCount = Math.max(maxCount, currCount);
        } else {
            currCount = 0;
        }
    }

    return maxCount;
};
