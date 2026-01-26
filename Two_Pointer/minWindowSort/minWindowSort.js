function minimumWindowSort(arr) {
    let n = arr.length;
    let left = 0, right = n - 1;

    // Find initial disorder from the beginning
    while (left < n - 1 && arr[left] <= arr[left + 1]) {
        left++;
    }
    if (left === n - 1) return 0; // already sorted

    // Find initial disorder from the end
    while (right > 0 && arr[right] >= arr[right - 1]) {
        right--;
    }

    // Find the min and max in the subarray
    let subMin = Math.min(...arr.slice(left, right + 1));
    let subMax = Math.max(...arr.slice(left, right + 1));

    // Extend left boundary if needed
    while (left > 0 && arr[left - 1] > subMin) {
        left--;
    }
    // Extend right boundary if needed
    while (right < n - 1 && arr[right + 1] < subMax) {
        right++;
    }

    return right - left + 1;
}