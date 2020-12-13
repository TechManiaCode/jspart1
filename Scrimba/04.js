/**
 * 
 * @param {number} num - year value
 * @return {number} - year's century
 */
const centuryFromYear = num => num < 0 
? Math.floor(num / 100) 
: Math.ceil(num / 100) 
|| 'Invalid input'

centuryFromYear(0) //?
centuryFromYear(-1) //?
centuryFromYear(1) //?
centuryFromYear(-101) //?
centuryFromYear(2020) //?