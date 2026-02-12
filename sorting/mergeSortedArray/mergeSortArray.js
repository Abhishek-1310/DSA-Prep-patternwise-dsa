var mergeSortedArray = function (nums) {
    let { nums1, m, nums2, n } = nums;
    let t = nums1.length - 1, l = m - 1, r = n - 1;
    while (r >= 0) {
        if (l >= 0 && nums1[l] > nums2[r]) {
            nums1[t--] = nums1[l--]
        } else {
            nums1[t--] = nums2[r--]
        }
    }

    return nums1;
};