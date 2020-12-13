/**
 * 
 * @param {Array<string>} values - array of values
 * @param {number} size - size of a chunk
 * @return {Array<Array<string>} chunkedArr - array of chunks with letters
 */

// Iterative approach 
function chunkyMonkey(values, size) {
    let chunkedArr = [];
    for(let i = 0; i < values.length; i += size ){
        chunkedArr.push(values.slice(i,size + i));
    }
    return chunkedArr;
}
