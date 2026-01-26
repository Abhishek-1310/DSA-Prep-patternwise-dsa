Find the peak of the mountain where the element is greater than both neighbors.
Expand left while values are decreasing from pick and expand right while values are  decreasing from pick stop 
when it stop decresing and count length.
Count the total length of this range to get the mountain length.
Start iterating from index 1 to n - 2 so both left and right neighbors always exist for peak validation.