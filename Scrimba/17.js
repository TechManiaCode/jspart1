// Returns number of different letters in a string

// With Set
const differentSymbolsNaive = str => [...new Set(str)].length


//Bonus
/**
 * Returns object with character counts
 * 
 * @param {string} str A sentence to calculate number of letters
 * @returns {Object} Contains letter properties with character counts
 */
const differentSymbolsNaive = str => [...str].reduce(countChars, {})

const countChars = (obj, char) => {
   obj.hasOwnProperty(char) ? obj[char]++ : obj[char] = 1;
   return obj
};