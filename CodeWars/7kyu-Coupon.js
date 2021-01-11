/**
 * 
 * @param {string} enteredCode 
 * @param {string} correctCode 
 * @param {string} currentDate 
 * @param {string} expirationDate 
 * @returns {Boolean}
 */
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
    return enteredCode === correctCode 
    && Date.parse(currentDate) <= Date.parse(expirationDate)
  }
  