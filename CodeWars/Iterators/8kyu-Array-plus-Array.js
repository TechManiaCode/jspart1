// Sum the contents of two arrays

// Concat way
const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((sum, num) => sum + num);

// Destructure way
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((sum,num) => sum + num);