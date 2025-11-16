const minSubArrayLen = function(target, nums) {
    let left = 0, right = 0, total = 0;
    let result = Infinity;
    while(right < nums.length){
        total += nums[right];
        while(total >= target){
            result = Math.min(result, right - left + 1);
            total -= nums[left];
            left++;
        }
        right++;
    }


    return result === Infinity ? 0 : result; 
};