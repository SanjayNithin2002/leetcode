var numSubarrayProductLessThanK = function(nums, k) {
    if(k < 1){
        return 0;
    }

    let left = 0, right = 0, product = 1;
    let result = 0;
    while(right < nums.length){
        product *= nums[right];
        // console.log(`left: ${left}, right: ${right}, product: ${product}`)
        while(product >= k && right >= left){
            product /= nums[left];
            left++;
            // console.log(`left: ${left}, right: ${right}, product: ${product}`)
        }
        result += right - left + 1
        right++;
    }
    return result;
};