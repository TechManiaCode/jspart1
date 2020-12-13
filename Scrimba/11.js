// Iterative approach simple
/**
 * 
 * @param {number} nums - coordinates of obstacles
 * @returns {number} - minimum jump
 */
function avoidObstacles(nums) {
    for(let jumpLength = 1; ; jumpLength++){
        if(nums.every(coordinate => coordinate % jumpLength !== 0))
            return jumpLength
    }
}

avoidObstacles([5, 3, 6, 7, 9]); //?
avoidObstacles([21, 44, 5, 91, 72]); //?

// Recursive approach
const avoidObstacles2 = (nums, jumpLength = 1) => {
    return nums.some(coordinate => coordinate % jumpLength === 0)
    ? avoidObstacles2(nums, jumpLength + 1)
    : jumpLength;
}

avoidObstacles2([5, 3, 6, 7, 9]); //?
avoidObstacles2([21, 44, 5, 91, 72]); //?
