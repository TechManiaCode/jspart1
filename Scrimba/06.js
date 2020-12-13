/**
 * 
 * @param {Array<string>} strs - Array of strings to be sorted
 * @return {Array<string>} - Sorted array
 */
const sortByLength = strs => strs.sort((a,b)=> a.length - b.length);

sortByLength([]); //?
sortByLength(["a"]); //?
sortByLength(["a","ab"]); //?
