# Methods and algorithms with JS

## To do:

  ### [CodeWars Tasks](https://www.codewars.com)
  <details>
    <summary style="margin-left: 10px;outline:none">Middle letter</summary>

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
  It's a solution that just happens to work but we don't know exactly why.
  
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
  1. indexShift~ variables are introduced to avoid 'magical numbers' +1 and -1.
  2. We ask what is the center of the word, but since we resolve with slice, we need index value and indices start with 0 so we subtract 1 from length. Hence, for a 4-letter word with indices 0 1 2 3 we know that the center would be between 1 and 2, at 1.5.
  3. Since indices are integers, we use closest approximates with Math methods, depending on their "side" ("left" and "right" from 1.5)
  4. For an end value we need to add 1 to the result because end value of slice function is non-inclusive;
  </details>

### [AdventOfCode](https://adventofcode.com/)



### [Scrimba](https://scrimba.com/learn/adventcalendar)
  
## Licenses
Preambles for different Licenses.
 * [civiccommons](http://wiki.civiccommons.org/Choosing_a_License/)
