function sumTwoSmallestNumbers(numbers) {  
  let sortedNumbers = numbers.sort((a, b) => {
      return a - b;
  })
  return sortedNumbers[0] + sortedNumbers[1];
}