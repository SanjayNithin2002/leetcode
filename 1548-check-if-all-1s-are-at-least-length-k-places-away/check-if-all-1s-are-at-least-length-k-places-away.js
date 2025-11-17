var kLengthApart = function(nums, k) {
    let lastIndex = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            console.log(i, lastIndex, k, lastIndex != -1 && (i - lastIndex) < k)
            if(lastIndex != -1 && (i - lastIndex) <= k){
                return false;
            }
            lastIndex = i;
        }
    }
    return true;
};