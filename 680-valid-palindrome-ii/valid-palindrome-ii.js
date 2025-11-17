const isPalindrome = (s, l, r) => {
    while(l < r){
        if(s[l] !== s[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
}

const validPalindrome = (s) => {
    let l = 0, r = s.length - 1;
    while(l < r){
        if(s[l] === s[r]){
            l++;
            r--;
        }
        else{
            return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1)
        }
    }
    return true;
};