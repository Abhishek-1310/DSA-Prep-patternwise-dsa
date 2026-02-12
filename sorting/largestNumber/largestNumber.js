var largestNumber = function (nums) {
    arr = nums.map(String);
    arr.sort((a, b) => {
        let c = a + b;
        let d = b + a;
        if (c === d) return 0;
        return c < d ? 1 : -1;
    })
    return arr.join("");
};


var largestNumber = function (nums) {
    let numsStr = nums.map(String);
    numsStr.sort((a, b) => (b + a).localeCompare(a + b));

    // If the largest is '0', return '0'
    if (numsStr[0] === '0') return '0';

    return numsStr.join('');
};