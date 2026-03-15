var subarrayProductLessThanK = function (nums) {
    let [arr, k] = nums;
    if (k <= 1) return 0;
    let lp = 0;
    let pdt = 1;
    let totalSum = 0;
    for (let rp = 0; rp < arr.length; rp++) {
        pdt *= arr[rp];
        while (pdt >= k) {
            pdt /= arr[lp];
            lp++;
        }
        totalSum += rp - lp + 1;
    }
    return totalSum;
};