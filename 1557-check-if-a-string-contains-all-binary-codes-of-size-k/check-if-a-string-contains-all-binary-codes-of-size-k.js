/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    if(s.length < k){
        return false;
    }
    let window;
    let map = new Map();
    for(let r = k; r <= s.length; r++){
        window = s.substring(r - k, r);
        map.set(window, (map.get(window) || 0) + 1)
    }
    for(let i = 0; i < Math.pow(2, k); i++){
        if(!map.has(i.toString(2).padStart(k, '0'))){
            return false;
        }
    }
    return true;
};