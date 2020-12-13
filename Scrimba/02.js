/** Instruction
Obtain a number of years needed with compound interest operation to reach given threshold.

Input
@param {number} deposit - initial value of money
@param {number} rate - percent we get each year
@param {number} threshold - money goal we want to reach
@param {number} [year=0] - year the threshold is reached
Output
@returns {number} year - year at which we reach the threshold */


// Iterative method
javascript
function depositProfit(deposit, rate, threshold) {
  for (var year = 0; deposit < threshold; year++){
      deposit *= 1 + rate / 100
  } 
  return year
}

//recursive method
const depositProfit = (deposit, rate, threshold, year = 0) => {
  return deposit < threshold
      ? depositProfit(deposit * (1 + rate / 100), rate, threshold, year + 1)
      : year
}