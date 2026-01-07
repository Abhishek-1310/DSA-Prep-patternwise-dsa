var squaresOfASortedArray = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let arr = [];
    let index = nums.length - 1;
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            arr[index] = nums[left] * nums[left];
            left++;
        } else {
            arr[index] = nums[right] * nums[right];
            right--;
        }
        index--;
    }
    return arr;
};
