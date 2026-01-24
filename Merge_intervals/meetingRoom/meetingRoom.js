function minMeetingRooms(intervals) {
    if (intervals.length === 0) return 0;

    // Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);

    let rooms = []; // stores end times of ongoing meetings

    for (let i = 0; i < intervals.length; i++) {
        let [start, end] = intervals[i];

        // Remove all meetings that have ended before current starts
        rooms = rooms.filter(e => e > start);

        // Add current meeting
        rooms.push(end);
    }

    // Maximum rooms used at any point = rooms length at the end
    return rooms.length;
}

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]])); // 2
console.log(minMeetingRooms([[0, 10], [5, 15], [10, 20], [12, 25]])); // 3


// function minMeetingRooms(intervals) {
//     if (intervals.length === 0) return 0;

//     const starts = intervals.map(i => i[0]).sort((a, b) => a - b);
//     const ends = intervals.map(i => i[1]).sort((a, b) => a - b);

//     let s = 0, e = 0;
//     let count = 0, maxRooms = 0;

//     while (s < intervals.length) {
//         if (starts[s] < ends[e]) {
//             count++; // need a new room
//             s++;
//         } else {
//             count--; // room freed
//             e++;
//         }
//         maxRooms = Math.max(maxRooms, count);
//     }

//     return maxRooms;
// }

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]));
