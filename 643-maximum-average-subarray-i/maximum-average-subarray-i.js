var findMaxAverage = function(nums, k) {
    const n = nums.length;

    if(n < k){
        return -1;
    }

    let windowAverage = 0;
    for(let i = 0; i < k; i++){
        windowAverage += nums[i];
    }

    windowAverage /= k;
    let maxAverage = windowAverage; 

    for(let i = k; i < n; i++){
        windowAverage += (nums[i] - nums[i - k])/k
        maxAverage = Math.max(maxAverage, windowAverage); 
    }

    return maxAverage
};