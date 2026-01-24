var nonOverlappingIntervals = function(nums) {
    nums.sort((a,b)=>a[1]-b[1]);
    let count=1;
    let lastVal = nums[0][1];
    for(let i=1;i<nums.length;i++){
        currFst = nums[i][0];
        if(currFst>=lastVal){
            count++;
        }
        lastVal=nums[i][1];
    }
    return nums.length-count;
};

// var eraseOverlapIntervals = function(intervals) {
//     if (intervals.length === 0) return 0;
    
//     // Sort intervals based on end time
//     intervals.sort((a, b) => a[1] - b[1]);
    
//     let removeCount = 0;
//     let end = intervals[0][1];
    
//     for (let i = 1; i < intervals.length; i++) {
//         if (intervals[i][0] < end) {
//             // Overlap detected, increment removal counter
//             removeCount++;
//         } else {
//             // Update end to the current interval's end
//             end = intervals[i][1];
//         }
//     }
    
//     return removeCount;
// };