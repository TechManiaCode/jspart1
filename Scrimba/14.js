/**
 * Returns largest difference between two adjacent numbers
 * 
 * @param {Array<number>} nums - A list of numbers to compare
 * @returns {number} - A highest absolute difference between two adjacent nums
 */

 // Reduce
 const arrayMaximalAdjacentDifference = nums => nums.reduce(compareDifferences, 0);
 
 const compareDifferences = (maxDifference, num, i, nums) => {
    const currentDifference = Math.abs(num - nums[i - 1]);
    return currentDifference > maxDifference ? currentDifference : maxDifference;
 }

// Classic
const arrayMaximalAdjacentDifference = nums => {
    let maxDifference = 0;
    let currentDifference;
    for(let i = 1; i <= nums.length; i++){
        currentDifference = Math.abs(nums[i] - nums[i - 1]);
        if (currentDifference > maxDifference )
             maxDifference = currentDifference;
    }
    return maxDifference;
 }