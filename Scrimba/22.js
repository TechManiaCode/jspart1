/**
 * Obtain a list of items in a particular column 
 * @param {Array<Array>} matrix 2D number matrix
 * @param {number} column a column we want to extract
 */
const extractMatrixColumn = (matrix, column) => matrix.map(row => row[column]);