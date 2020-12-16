# Methods and algorithm with js

## To do:
1) All Part 1 Solutions
2) Describe

All the [codewars](https://www.codewars.com/) task in list from CodersCrew. For example:
  > #### Instruction:
  > You are going to be given a word. Your job is to return the middle 
  > character of the word. If the word's length is odd, return the middle character.
  > If the word's length is even, return the middle 2 characters.
  >
  > #### Examples:
  > ```txt
  > Kata.getMiddle("test") should return "es"
  > Kata.getMiddle("testing") should return "t"
  > Kata.getMiddle("middle") should return "dd"
  > Kata.getMiddle("A") should return "A"
  > ```
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
    #### Description:
    > TODO:
    
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
    #### Description:
    > TODO:
    
  </details>
  
  #### Part II - Arrays and loops:
  
  <details>
    <summary>Sum of two lowest positive integers</summary>
  
  - ### Instruction
    > Create a function that returns the sum of the two lowest positive numbers 
    given an array of minimum `4` positive integers. 
    > No floats or non-positive integers will be passed.
    >
    > For example, when an array is passed like `[19, 5, 42, 2, 77]`, the output should be `7`.
    >
    > - #### Example:
    > ```txt
    > [10, 343445353, 3453445, 3453545353453] should return 3453455.
    > ```
  - ### Solution
    #### Classic
    ```javascript
      const sumTwoSmallestNumbers = (numbers) => {  
        numbers = numbers.sort((a, b) => a - b);
        numbers = numbers.slice(0, 2);
        return numbers.reduce((a, b) => a+b);
      }
    ```
    #### Short
    ```javascript
      const sumTwoSmallestNumbers = (numbers) => {  
        return numbers
          .sort((a, b) => a - b)
          .slice(0, 2)
          .reduce((a, b) => a+b);
     }
    ```
    #### Description:
    > TODO:
  
  </details>
  <details>
    <summary>Remove the minimum</summary>
  
  - ### Instruction
    > #### The museum of incredible dull things
    > 
    > The museum of incredible dull things wants to get rid of some exhibitions. 
    > Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions.
    > She gives them a rating, and then removes the one with the lowest rating.
    >
    > However, just as she finished rating all exhibitions, she's off to an important fair,
    > so she asks you to write a program that tells her the ratings of the items after
    > one removed the lowest one. Fair enough.
    >
    > #### Task
    > Given an array of integers, remove the smallest value. Do not mutate the original array/list.
    > If there are multiple elements with the same value, remove the one with a lower index.
    > If you get an empty array/list, return an empty array/list.
    >
    > Don't change the order of the elements that are left.
    > 
    > #### Examples
    > ```javascript
    > removeSmallest([1,2,3,4,5]) = [2,3,4,5]
    > removeSmallest([5,3,2,1,4]) = [5,3,2,4]
    > removeSmallest([2,2,1,2,1]) = [2,2,2,1]
    > ```
  - ### Solution
    #### Clasic
    ```javascript
    const removeSmallest = (numbers) => {
      let v = numbers[0];
      let new_tab = [];
      
      
      for(i=1; i < numbers.length; i++){
        if (v > numbers[i]) {v = numbers[i];}
      }
      
      for(i = 0; i < numbers.length; i++){
        if(i !== numbers.indexOf(v)){
          new_tab.push(numbers[i]);
        }
      }
    return new_tab;
    };
    ```
    #### Short
    ```javascript
    ```
    #### Description:
    > TODO:
    
  </details>
  <details>
    <summary>The highest profit wins!</summary>
  
  - ### Instruction
    > #### Story
    > 
    > Ben has a very simple idea to make some profit: he buys something and sells it again.
    > Of course, this wouldn't give him any profit at all if he was simply to buy and
    > sell it at the same price. Instead, he's going to buy it for the
    lowest possible price and sell it at the highest.
    >
    > #### Task
    >
    > Write a function that returns both the minimum and maximum number of the given list/array.
    > 
    > Examples
    > ```javascript
    > minMax([1,2,3,4,5])   == [1,5]
    > minMax([2334454,5])   == [5, 2334454]
    > minMax([1])           == [1, 1]
    > ```
    >
    > #### Remarks
    >
    > All arrays or lists will always have at least one element, 
    so you don't need to check the length. 
    > Also, your function will always get an array or a list, 
    you don't have to check for `null`, `undefined` or similar.
  
  - ### Solution
    ```javascript
      const minMax = (arr) => {
        return [arr.sort((a, b) => a-b)[0], 
                arr.sort((a, b) => a-b)[arr.length -1]];
      };
    ```
    #### Description:
    > TODO:
    
  </details>
    
## Additional tasks:

One or more task from page:

- [adventofcode](https://adventofcode.com/)

One or more task from page:

- [scrimba](https://scrimba.com/learn/adventcalendar)

## Licenses

Preambles for different Licenses.

- [civiccommons](http://wiki.civiccommons.org/Choosing_a_License/)
