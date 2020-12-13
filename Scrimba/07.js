/**
 * 
 * @param {string} char - letter to check as a vowel
 * @returns {Boolean} is provided letter a vowel
 */
const isVowel = char => [...'aeiou'].includes(char); //?

/**
 * 
 * @param {string} char - letter to be scored
 * @returns {number} a score
 */
const letterScore = char => isVowel(char) ? 1 : 2; //?

/**
 * A callback for reduce in countVowelConsonant.
 * @param {number} sum - sum of letter scores
 * @param {string} char - letter to be scored
 * @returns {number} - sum of scores
 */
const scoreVowelConsontant = (sum, char) => letterScore(char) + sum; //?

/**
 * 
 * @param {string} str - a string to have its letters scored
 * @returns {number} - sum of scores
 */
const countVowelConsonant = str => [...str].reduce( scoreVowelConsontant , 0);

// Note that we're guaranteed only lowercase letters
countVowelConsonant('shropshire'); //?