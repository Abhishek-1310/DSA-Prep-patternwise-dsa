var maximumPointsYouCanObtainFromCards = function (nums) {
    let { cardsPoints, k } = nums;
    const len = cardsPoints.length;
    const total = cardsPoints.reduce((a, b) => a + b, 0);
    if (k === len) return total;

    let minPoint = Infinity;
    const wSize = len - k;
    let wSum = 0;
    for (let i = 0; i < len; i++) {
        wSum += cardsPoints[i];
        if (i >= wSize) {
            wSum -= cardsPoints[i - wSize];
        }
        if (i >= wSize - 1) {
            minPoint = Math.min(minPoint, wSum);
        }
    }
    return total - minPoint;

};

