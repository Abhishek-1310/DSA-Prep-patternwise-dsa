var subarraysSumsDivisibleByK = function (nums, k) {

    let psum = 0;
    let map = new Map();
    let count = 0;
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        psum += nums[i];
        let rem = psum % k;
        rem = (rem + k) % k;
        if (map.has(rem)) {
            count += map.get(rem);
        }
        map.set(rem, (map.get(rem) ?? 0) + 1);
    }
    return count;
};

// with Object
function subarraysDivByK(nums, k) {
    let count = 0;
    let cumulativeSum = 0;
    const freq = { 0: 1 };

    for (let num of nums) {
        cumulativeSum += num;
        let remainder = ((cumulativeSum % k) + k) % k;
        count += (freq[remainder] || 0);
        freq[remainder] = (freq[remainder] || 0) + 1;
    }

    return count;
}