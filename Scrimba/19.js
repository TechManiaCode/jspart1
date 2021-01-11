/**
 * Checks if given sequence of letters is a subset of the alphabet 
 * that does not contain duplicates.
 * 
 * @param {string} str String to chceck against alphabet
 * @returns {Boolean} result of evaluations
 */

const alphabetSubsequence = str => {
    const stringSet = new Set([...str]);
    const orderedStr = [...str].sort((a,b) => a - b).join('');
    const isOrdered = str === orderedStr;
    const isDuplicateFree = stringSet.size === str.length
    
    return isDuplicateFree && isOrdered
}

// 3 assumptions:
// - Sets are duplicate-free
// - Two strings can be compared for similarity
// - Sort for string characters will return them in alphabetical order
