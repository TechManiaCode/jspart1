/**
 * 
 * @param {Array<number>} numbers Numbers to check against minimum
 * @returns {Array<numbers>} array without lowest number of lowest index
 */
const removeSmallest = numbers => numbers.filter((_,i) => i !== numbers.indexOf(Math.min(...numbers)));

removeSmallest([1,2,3,4,5]) //? [2,3,4,5]
removeSmallest([5,3,2,1,4]) //? [5,3,2,4]
removeSmallest([2,2,1,2,1]) //? [2,2,2,1]