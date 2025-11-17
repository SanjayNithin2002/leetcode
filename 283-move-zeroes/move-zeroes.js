const moveZeroes = (nums) => {
    let l = 0;
    let temp;
    for(let r = 0; r < nums.length; r++){
        if(nums[l] === 0 && nums[r] == 0){
            continue;
        }
        if(nums[l] === 0 && nums[r] !== 0){
            temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
        }
        l++;
    }
    return nums;
};