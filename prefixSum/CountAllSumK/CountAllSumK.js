var subarraySumEqualsK = function (nums, k) {
    let map = new Map();
    map.set(0, 1);
    let psum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        psum += nums[i];
        if (map.has(psum - k)) {
            count += map.get(psum - k);
        }
        map.set(psum, (map.get(psum) ?? 0) + 1);
    }
    return count;
};