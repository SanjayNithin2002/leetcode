var removeDuplicates = function(nums){
    let l = 1, r = 1;
    while(r < nums.length){
        if(nums[r - 1] != nums[r]){
            nums[l] = nums[r];
            l++;
        }
        r++;
    }
    console.log(nums)
    return l;
};