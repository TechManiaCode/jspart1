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



### [Scrimba](https://scrimba.com/learn/adventcalendar)
  <details>
    <summary>Day 1 - Candies</summary>

  - ### Instruction
  > Share candies between children knowing a candy can't be split.
  > #### Input
  > - (Int) candies
  > - (Int) children
  > #### Output
  > (Int) Candies that will be eaten
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
    > - (Int) deposit - initial value of money
    > - (Int) rate - percent we get each year
    > - (Int) threshold - money goal we want to reach
    > #### Output
    > (Int) Year at which we reach the threshold
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
          ? depositProfit(deposit * (1 + rate / 100), rate, threshold, year + 1);
          : year
    }
    ```
    - We call the function inside itself as long as the goal is not reached
    - we pass in another argument (year) with default value, 0, to serve as counter
  </details>

## Licenses
Preambles for different Licenses.
 * [civiccommons](http://wiki.civiccommons.org/Choosing_a_License/)
