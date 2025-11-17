/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if(s.length < 10){
        return [];
    }
    let map = new Map();
    for(let i = 10; i <= s.length; i++){
        window = s.substring(i - 10, i);
        map.set(window, (map.get(window) || 0) + 1)
    }
    return Array.from(map.keys().filter(key => map.get(key) > 1));
};