var containsNearbyDuplicate = function(nums, k) {
    let l = 0;
    set = new Set();
    for(let r = 0; r < nums.length; r++){
        if(r - l > k){
            set.delete(nums[l]);
            l++;
        }
        if(set.has(nums[r])){
            return true;
        }
        set.add(nums[r]);
    }
    return false;
};