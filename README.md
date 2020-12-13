# Methods and algorithms with JS

## To do:

  ### [CodeWars Tasks](https://www.codewars.com)
  <details>
    <summary>Middle letter</summary>

  - ### Instruction
    > Return the middle character of a given word.
    >
    > - If the word's length is odd, return the middle character.
    > - If the word's length is even, return the middle 2 characters.
    >
    > #### Examples:
    > - Kata.getMiddle("test") should return "es"
    > - Kata.getMiddle("testing") should return "t"
    > - Kata.getMiddle("middle") should return "dd"
    > - Kata.getMiddle("A") should return "A"
    >
    > #### Input
    > A word (string) of length 0 < str < 1000
    > (In javascript you may get slightly more than 1000 in some test cases due to an error in the > test cases).
    > You do not need to test for this. This is only here to tell you that you do not need to worry about
    > your solution timing out.
    >
    > #### Output
    > The middle character(s) of the word represented as a string.

  - ### Solution:
    #### Short
    ```javascript
      const getMiddle = s => s.slice(Math.floor((s.length - 1) / 2), Math.ceil((s.length + 1) / 2));
    ```
    It's a solution that just happens to work but we don't know exactly how.
  
    #### Elaborate
    ```javascript
    const getMiddle = word => {
        const indexShiftFromZero = 1;
        const indexShiftSliceEnd = 1;
        const center = (word.length - indexShiftFromZero) / 2;
        const start = Math.floor(center);
        const end = Math.ceil(center) + indexShiftSliceEnd;
        return word.slice(start,end);
    }
    ```
    - *indexShift* variables are introduced to avoid **magical numbers** +1 and -1.
    - We ask for the center of the word but since we use slice, we need index values and **indices start with 0** so we subtract 1 from length. We see that for a 4-letter word with indices 0 1 2 3 the center would be between 1 and 2, at 1.5.
    - Since **indices are integers**, we use closest approximates with Math methods, depending on their "side" ("left" and "right" from 1.5)
    - For an end value we need to add 1 to the result because **end value of slice function is non-inclusive**;
  </details>

### [AdventOfCode](https://adventofcode.com/)
  <details>
    <summary>Day 1 - Part 1: Expense report - sums of 2</summary>

  - ### Instruction
  > Given a text file with numbers, find a pair that sums to 2020 (only one such pair guaranteed) and obtain its product.
  > #### Input
  > (string) input - text with numbers that needs to be parsed
  > #### Output
  > (number) - product of 2 numbers that sum to 2020
  - ### Solution
  #### Functional
  ```javascript
  fetch('input.txt')
    .then(response => response.text())
    .then(text => text.split(`\n`).map(el => parseInt(el)))
    .then(data => data.reduce(multiplyPairWithSum2020, null))
    .then(result => console.log(result));

  function multiplyPairWithSum2020 (result, itm, idx, arr) {
    const validPair = arr.find((pair, pairIdx) => (idx !== pairIdx) && (itm + pair === 2020));
    return validPair ? itm * validPair : result;
  }
  ```
  - We use fetch to obtain data from a file
  - We parse it to array by splitting at new lines and converting text elements to numbers
  - We use reduction, looking for a pair that sums to 2020, returning null if none exists
  - On each reduction element we check that the pair we're comparing it with is not the element itself
  </details>

  <details>
    <summary>Day 1 - Part 2: Expense report - sums of 3</summary>

  - ### Instruction
  > Given a text file with numbers, find a combination of 3 elements that sums to 2020 (only one such pair guaranteed) and obtain its product.
  > #### Input
  > (string) input - text with numbers that needs to be parsed
  > #### Output
  > (number) - product of 3 numbers that sum to 2020
  - ### Solution
  #### Recursive way
  ```javascript
  fetch('input.txt')
    .then(response => response.text())
    .then(text => text.split(`\n`).map(element => parseInt(element)))
    .then(numbers => { 
      numbers.sort((a,b)=> a - b);

      const findTarget = (target, head = 0, tail = numbers.length - 1) => {
        const headNum = numbers[head];
        const tailNum = numbers[tail];
        const sum = headNum + tailNum;
        // Recursive search with narrowing candidates
        return head >= tail 
          ? null
          : sum === target
            ? headNum * tailNum
            : sum < target
              ? findTarget(target, head + 1)
              : findTarget(target, head, tail -1 )
      } 
      // To add 3rd num, we need to get 2 nums work for smaller sum
      const validCombination = numbers.filter(num => findTarget(2020 - num)) 
      // We multiply the resulting array by its elements
      const finalProduct = validCombination.reduce((product, num) => product * num, 1);
      console.log(validCombination, finalProduct);
    })
  ```
  - The idea here is to check by narrowing our set
  - For it to work, we need to sort the data
  - We check two extremes of dataset, if they sum to 2020, we multiply
  - If result is not 2020 we ask if the result was too low or too high
  - If it was too low, our head (lower number) was too low
  - If it was too high, our tail (higher number) was too high
  - Assumption #2: A combination of 3 that sums to 2020 is a set of numbers where a combination of 2 others would give a sum of 2020 minus the third one. If we filter our dataset based on this assumption, we are to obtain 3 numbers (it´s guaranteed);

  </details>
  
  <details>
    <summary>Day 2 - Part 1: Matching passwords</summary>

  - ### Instructions
  > Given a text file with passwords and password rules (a letter has to appear min-max times), return a number of passwords that satisfy rules
  > #### Input
  > (string) input - text with numbers that needs to be parsed
  > #### Output
  > (number) - number of correct passwords
  - ### Solution
  ```javascript
  fetch('input.txt')
    .then(response => response.text())
    .then(text => text
      .trim()
      .split(`\n`)
      .filter(item => {
        const pattern = /(\d*)-(\d*) (\w): (\S*)/;
        const [_, min , max, letter, password] = item.match(pattern);
        const charCount = [...password].filter(char => char === letter).length;
        return charCount >= parseInt(min) && charCount <= parseInt(max)
      }).length
    )
    .then(result => console.log(result))
  ```
  - There are two ways to parse the entries: one is with split and the other with regex
  - With regex formed like above we will obtain an array with entire entry at index 0 and match groups in following indices.
  - Regex result can be destructured
  - We check how many times a letter appears
  - We check if the count is within validation limits
  - We just get the length of the array resulting from filter
  </details>

  <details>
    <summary>Day 2 - Part 2: Matching passwords, new rules</summary>

  - ### Instructions
  > Given a text file with passwords and password rules (a letter has to appear at one XOR other index), return a number of passwords that satisfy rules
  > #### Input
  > (string) input - text with numbers that needs to be parsed
  > #### Output
  > (number) - number of correct passwords
  - ### Solution
  ```javascript
  fetch('input.txt')
    .then(response => response.text())
    .then(text => text
      .trim()
      .split(`\n`)
      .filter(item => {
        const pattern = /(\d*)-(\d*) (\w): (\S*)/;
        const [_, index1 , index2, letter, password] = item.match(pattern);
        const char1Valid = password[index1 - 1] === letter;
        const char2Valid = password[index2 - 1] === letter;
        
        return char1Valid !== char2Valid; 
      }).length
    )
  .then(result => console.log(result))
  ```
  - The idea is pretty similar to the previous one, we just check if the letter appears at the index and only one of them
  - JS has no XOR (other than bitwise xor), but in this case since both values compared are boolans !== works as xor
  </details>

  <details>
    <summary>Day 3 - Part 1: Tobogan map traverse</summary>

  - ### Instructions
  > Given a text file with a topography pattern of trees return a number of trees that will be hit while traversing the route, knowing that the pattern repeats.
  > #### Input
  > (string) input - text with # marking trees and . - no tree.
  > #### Output
  > (number) - number of trees hit
  - ### Solution
  #### Recursive way
  ```javascript
  fetch('input.txt')
    .then(response => response.text())
    .then(text => text.trim().split(`\n`))
    .then(route => {
      const width = route[0].length;
      const move = (row = 0, col = 0) =>  
        row < route.length 
          ? move(row + 1, (col + 3) % width) + (route[row][col] === '#' ? 1 : 0)
          : 0;
      console.log(move());
  })
  ```
 
  </details>
  
### [Scrimba](https://scrimba.com/learn/adventcalendar)
  <details>
    <summary>Day 1 - Candies</summary>

  - ### Instruction
  > Share candies between children knowing a candy can't be split.
  > #### Input
  > - (number) candies
  > - (number) children
  > #### Output
  > (number) Candies that will be eaten
  - ### Solution
  ```javascript
  const splitCandies = (children, candies) => Math.floor(candies / children) * children;
  ```
  We get 'candies per capita' rounded down and we multiply by children.
  </details>
  <details>
    <summary>Day 2 - Compound interest</summary>

  - ### Instruction
  > Obtain a number of years needed with compound interest operation to reach given threshold.
  > #### Input
  > - (number) deposit - initial value of money
  > - (number) rate - percent we get each year
  > - (number) threshold - money goal we want to reach
  > #### Output
  > (number) Year at which we reach the threshold
  - ### Solution

  #### Iterative method
  ```javascript
  function depositProfit(deposit, rate, threshold) {
    for (var year = 0; deposit < threshold; year++){
        deposit *= 1 + rate / 100
    } 
    return year
  }
  ```
  This is a standard way, note var being used to spill the declaration out of the loop block context.
  - We create a loop that runs as long as the deposit is lower than threshold
  - in each step we multiply the deposit by base + rate


  #### Recursive method
  ```javascript
  const depositProfit = (deposit, rate, threshold, year = 0) => {
    return deposit < threshold
        ? depositProfit(deposit * (1 + rate / 100), rate, threshold, year + 1)
        : year
  }
  ```
  - We call the function inside itself as long as the goal is not reached
  - we pass in another argument (year) with default value, 0, to serve as counter
  </details>
  <details>
    <summary>Day 3 - ChunkyMonkey</summary>

  - ### Instruction
  > Given an array, create a new one composed of elements arranged in array chunks of given size
  > #### Input
  > - (Array<number>) values - array to be chunked
  > - (number) size - number of elements inside a chunk
  > #### Output
  > (Array<Array>) - Array of chunks
  - ### Solution

  #### Iterative method
  ```javascript
  function chunkyMonkey(values, size) {
      let chunkedArr = [];
      for(let i = 0; i < values.length; i += size ){
          chunkedArr.push(values.slice(i,size + i));
      }
      return chunkedArr;
  }
  ```
  </details>

  <details>
    <summary>Day 4 - Century from year</summary>

  - ### Instruction
    > Given a year, return its century
    > #### Input
    > (number) num - a year
    > #### Output
    > (number) - century of the year
    - ### Solution
  ```javascript
    const centuryFromYear = num => num < 0 
      ? Math.floor(num / 100) 
      : Math.ceil(num / 100) 
      || 'Invalid input'
  ```
  - We use Math methods mainly to decide in which century 1st year of each hundred lies. 
  - For negative values we need a lower result (for -101: -2 instead of -1), hence Math.floor, and for positive - a higher one
  - 0 does not exist in AD system, so it should be considered invalid (technically we could resolve to null)
  </details>

  <details>
    <summary>Day 5 - Reverse a string</summary>

  - ### Instruction
  > Given a string, return its reverse
  > #### Input
  > (string) str - text to reverse
  > #### Output
  > (string) - reversed text
  - ### Solution
  ```javascript
    const reverseAString = str => [...str].reverse().join('');
  ```
  - We destructure the string, reverse the resulting array and join it again.
  </details>

  <details>
    <summary>Day 6 - Sorting strings</summary>

  - ### Instruction
  > Given an array of strings, return it with strings sorted according to their length
  > #### Input
  > (Array<string>) - strs
  > #### Output
  > (Array<string>) - Array of strings sorted by their length
  - ### Solution
  ```javascript
    const sortByLength = strs => strs.sort((a,b)=> a.length - b.length);
  ```
  - We use sort method based on element lengths
  </details>

  <details>
    <summary>Day 7 - Count Vowel Consonant</summary>

  - ### Instruction
  > Given a string that consists only of lowercase English letters and scoring pattern (1 for vowel, 2 for consonant) return a sum of scores
  > #### Input
  > (string) s - A text to have its letter scores summed
  > #### Output
  > (number) - a score total for letters in the given string
  - ### Solution
  ```javascript
  const isVowel = char => [...'aeiou'].includes(char);
  const letterScore = char => isVowel(char) ? 1 : 2;
  const scoreVowelConsontant = (sum, char) => letterScore(char) + sum;
  const countVowelConsonant = str => [...str].reduce( scoreVowelConsontant , 0); 
  ```
  - In order to keep things easier to read, we separate the algorythm into functions - each taking care of only one task.
  - Our main function, countVowelConsonant(), takes the string and passes it to scoring callback, starting with a value 0
  - scoreVowelConsonant() invokes scoring for particular letter and adds it to current sum
  - letterScore() resolves scoring based on letter type, checking with isVowel()
  - isVowel declares an array of vowels and checks if provided character is one of it
  </details>

  <details>
    <summary>Day 10 - Max pair product</summary>

    - ### Instruction
  > Given an array of numbers return a highest product among consecutive pairs
  > #### Input
  > (Array<number>) nums - numbers to multiply
  > #### Output
  > (Number) - highest product
  - ### Solution
  #### Iterative way
  ```javascript
  function adjacentElementsProduct(nums) {
    let maxProduct = 0;
    for (let i = 1; i <= nums.length; i++) {
      if(nums[i] * nums[i-1] > maxProduct)
        maxProduct = nums[i] * nums[i-1];
    }
    return maxProduct;
  }
  ```
  - We start off comparing with the second index (1) against first (0)
  - We overwrite maxProduct value whenever current pair produces higher result

  #### Functional way
  ```javascript
  const getMaxProduct = (maxProduct, num, i, array) => {
    const pairProduct = array[i-1] * num || 0;
    return pairProduct > maxProduct ? pairProduct : maxProduct;
  }
  const adjacentElementsProduct = nums => nums.reduceRight(getMaxProduct, 0);       
  ```
  - We create 2 functions a callback and a main function. 
  - It doesn't really matter if we use reduce or reduceRight
  - In case of i === 0 we use short-circuiting as array[i-1] does not exist, it's quicker than check for i === 0;
  
  </details>
  <details>
    <summary>Day 11 - Avoid obstacles</summary>

  - ### Instruction
  > Given an array of coordinates and starting from 0, return a value of a shortest jump that wont result in a crash.
  > #### Input
  > (Array<number>) nums - coordinates of obstacles
  > #### Output
  > (Number) - length of the shortest jump
  - ### Solution
  #### Iterative way
  ```javascript
  function avoidObstacles(nums) {
    for (let jumpLength = 1; ;umpLength++) {
      if(nums.every(coordinate => coordinate % jumpLength !== 0))
        return jumpLength
    }
  }
  ```
  - We assume that a valid result is the first one that is not a divisor of any of present coordinates. Hence we use modulo.
  - There's no jump of length 0
  - There will always be a return, hence no need for limit (while loop would look more natural)

  #### Recursive way
  ```javascript
  const avoidObstacles = (nums, jumpLength = 1) => {
    return nums.some(coordinate => coordinate % jumpLength === 0)
    ? avoidObstacles(nums, jumpLength + 1)
    : jumpLength;
  ```
  - We can do pretty much the same with recursion, either with every or some callback (changing the order of true/false response)

  </details>

  <details>
    <summary>Day 12 - Time Validator</summary>

  - ### Instruction
  > Given a string that contains an hour-like format, check if the values are correct
  > #### Input
  > (string) str - A text that represents an hour
  > #### Output
  > (Boolean) - result of a check
  - ### Solution
  #### Via comparison
  ```javascript
  const validHour = hour => parseInt(hour) >= 0 && parseInt(hour) <= 24; //? 
  const validMinutes = minutes => parseInt(minutes) >= 0 && parseInt(minutes) <= 59; //? 

  const validTime = str => {
      const [ hour, minutes ] = str.split(':');
      return validHour(hour) && validMinutes(minutes)
  }
  ```
  - We destructure a result of split 
  - We separate checks on hour and minutes
  #### Via regex
  ```javascript
  const validTime = str => /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(str)
  ```

  </details>

## Licenses
Preambles for different Licenses.
 * [civiccommons](http://wiki.civiccommons.org/Choosing_a_License/)
