/**
 * Checks if a sum looked for can be obtained between two arrays
 * 
 * @param {Array<number>} nums1 
 * @param {Array<number>} nums2 
 * @param {number} value Sum to be obtained
 */
const sumOfTwo = (nums1, nums2, value) => {
    const allSums = nums1.map(num => nums2.map(pair => num + pair)).flat();
    return allSums.includes(value);
}