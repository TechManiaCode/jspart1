/** 
 * Transforms given sentence (array) into dashed words separated by spaces
 * 
 * @param {string} arr Words
 * @result {string} Dash-separated words
 */
const insertDashes = arr => arr.split(' ').map(word => [...word].join('-')).join(' ');