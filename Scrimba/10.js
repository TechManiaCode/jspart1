// Iterative way
function adjacentElementsProduct(nums) {
    let maxProduct = 0;
    for(let i = 1; i <= nums.length; i++){
        if(nums[i] * nums[i-1] > maxProduct)
            maxProduct = nums[i] * nums[i-1];
    }
    return maxProduct;
}

// Functional way
/**
 * 
 * @param {Array<number>} nums A list of numbers to multiply in pairs
 * @returns {number} a highest product obtainable from adjacent numbers
 */
const getMaxProduct = (maxProduct, num, i, array) => {
    const pairProduct = array[i-1] * num || 0;
    return pairProduct > maxProduct ? pairProduct : maxProduct;
}
const adjacentElementsProduct2 = nums => nums.reduceRight(getMaxProduct, 0);       


adjacentElementsProduct2(nums)