/**
 * Extracts each k-th element of an array
 * @param {Arrray<number>} nums Numbers to be filtered
 * @returns {Array<number>} numbers aftrer filtering 
 */

const extractEachKth = (nums, index) => nums.filter(num => num % index !== 0)
