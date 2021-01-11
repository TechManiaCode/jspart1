/**
 * Given array of integers, converts it so that each position shows the last number lower than the one at the position that occured before that position OR -1.
 */

const arrayPreviousLess = nums => {
    return nums.map((num, idx) => nums.reduce((bestMatch, currNum, currIdx) => {
        return currNum < num && currIdx < idx ? currNum : bestMatch;
    }, -1));
}