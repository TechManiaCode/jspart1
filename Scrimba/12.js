// Comparison way
const validHour = hour => parseInt(hour) >= 0 && parseInt(hour) <= 24; //? 
const validMinutes = minutes => parseInt(minutes) >= 0 && parseInt(minutes) <= 59; //? 

/**
 * 
 * @param {string} str - time string to be checked
 * @returns {Boolean} - is the time valid
 */
const validTime = str => {
    const [ hour, minutes ] = str.split(':');
    return validHour(hour) && validMinutes(minutes)
}

// Regex way
const validTime2 = str => /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(str)

validTime('23:59'); //?
validTime('-23:59'); //?
validTime('25:59'); //?
validTime('23:61'); //?