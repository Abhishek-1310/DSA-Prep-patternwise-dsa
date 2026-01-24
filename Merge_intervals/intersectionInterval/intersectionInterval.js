var intervalListIntersections = function (nums) {
    const a = nums[0];
    const b = nums[1];
    let i = 0, j = 0;
    let result = [];
    while (i < a.length && j < b.length) {
        let start = Math.max(a[i][0], b[j][0]);
        let end = Math.min(a[i][1], b[j][1]);
        if (start <= end) {
            result.push([start, end]);
        }
        if (a[i][1] < b[j][1]) i++;
        else j++;
    }
    return result;
};