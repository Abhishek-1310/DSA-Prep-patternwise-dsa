var insertInterval = function (nums) {
    interval = nums[0];
    nInterval = nums[1];
    let result = [];
    for (let i = 0; i < interval.length; i++) {
        let [st, ed] = interval[i];

        if (ed < nInterval[0]) {
            result.push(interval[i]);
        } else if (st > nInterval[1]) {
            result.push(nInterval);
            nInterval = interval[i]
        } else {
            nInterval[0] = Math.min(st, nInterval[0]);
            nInterval[1] = Math.max(ed, nInterval[1]);
        }
    }
    result.push(nInterval);
    return result;
};