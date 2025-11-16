var lengthOfLongestSubstring = function(s) {
    let left = 0, right = 0;
    let set = new Set();
    let result = 0;

    while(right < s.length){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++; 
        }
        set.add(s[right]);
        result = Math.max(result, right - left + 1);
        right++;
    }

    return result;
};