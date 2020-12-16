# Methods and algorithm with js

## To do: 
All the [codewars](https://www.codewars.com/) task in list from CodersCrew. For example:
  > #### Instruction:
  > You are going to be given a word. Your job is to return the middle 
  > character of the word. If the word's length is odd, return the middle character.
  > If the word's length is even, return the middle 2 characters.
  >
  > #### Examples:
  ```txt
  Kata.getMiddle("test") should return "es"
  Kata.getMiddle("testing") should return "t"
  Kata.getMiddle("middle") should return "dd"
  Kata.getMiddle("A") should return "A"
  ```
  >
  > #### Input
  > A word (string) of length 0 < str < 1000
  > (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases).
  > You do not need to test for this. This is only here to tell you that you do not need to worry about
  your solution timing out.
  >
  > #### Output
  > The middle character(s) of the word represented as a string.
  >
  > #### Solution:
  > ```javascript
  > const getMiddle = (s) => {
  > if(s.length > 0 && s.length < 1000){
  >  const _mid = Math.floor(s.length / 2);
  >    return (s.length % 2 === 0)? s[_mid - 1] + s[_mid]: s[_mid];
  >  }
  > };
  > ```
### [CodeWars](https://www.codewars.com/)
  #### Part I - Functions and conditional statements:
  
  <details>
    <summary>Hello World</summary>

  - ### Instruction

  > Make a simple function called greet that returns the most-famous "hello world!".
  >
  > - Style Points
  > - Sure, this is about as easy as it gets.
  >   But how clever can you be to create the most creative hello world you can think of?
  >   What is a "hello world" solution you would want to show your friends?
  
  - ### Solution
  
    ### Clasic
    ```javascript
    const greet = () => {
      return "hello world!";
    };
    ```
  
    ### Short
    ```javascript
    const greet = () => "hello world!";
    ```
  </details>
  <details>
    <summary>Convert a Number to a String!</summary>
  
  - ### Instruction

    > We need a function that can transform a number into a string.
    > What ways of achieving this do you know?
    >
    > #### Examples
    >
    > - numberToString(123); //returns '123';
    > - numberToString(999); //returns '999';

  - ### Solution:
    #### Clasic
    ```javascript
    const numberToString = num => {
         return num.toString();
    };
    ```

    #### Short
    ```javascript
    const numberToString = num => num.toString();
    ```
  </details>

## Additional tasks:
One or more task from page:
  * [adventofcode](https://adventofcode.com/)
  
One or more task from page:
  * [scrimba](https://scrimba.com/learn/adventcalendar)
  
## Licenses
Preambles for different Licenses.
 * [civiccommons](http://wiki.civiccommons.org/Choosing_a_License/)
