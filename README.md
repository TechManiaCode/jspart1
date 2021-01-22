# Methods and algorithm with js

## To do:
1) Describe

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
  
    ### Classic
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
    #### Classic
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
  <details>
    <summary>Get the middle character</summary>
  
  - ### Instruction
    > You are going to be given a word. Your job is to return the middle character of the word.
    > If the word's length is odd, return the middle character. If the word's 
    length is even, return the middle 2 characters.
    >
    > #### Examples:
    >
    > ```txt
    > Kata.getMiddle("test") should return "es"
    > Kata.getMiddle("testing") should return "t"
    > Kata.getMiddle("middle") should return "dd"
    > Kata.getMiddle("A") should return "A"
    > ```
    > 
    > #### Input:
    > 
    > A word `(string)` of length `0 < str < 1000` (In javascript you may get slightly more 
    > than `1000` in some test cases due to an error in the test cases). 
    > You do not need to test for this. This is only here to tell 
    you that you do not need to worry about your solution timing out.
    >
    > #### Output:
    > 
    > The middle character(s) of the word represented as a string.
  - ### Solution:
    #### Classic:
    ```javascript
      const getMiddle = (s) => {
        if(s.length > 0 && s.length < 1000){
          const _p = (s.length % 2 === 0)? true: false;
          if(_p){
            const _id = s.length/2 - 1;
            return s[_id] + s[_id+1];
          } else {
              const _id = (s.length-1)/2;
              return s[_id];
          }
        }
      };
    ```
    #### Short:
    ```javascript
      const getMiddle = (s) => {
        if(s.length > 0 && s.length < 1000){
          const _mid = Math.floor(s.length / 2);
          return (s.length % 2 === 0)? s[_mid - 1] + s[_mid]: s[_mid];
        }
      };
    ```
    #### Description:
    > TODO:
    
  </details>
  <details>
    <summary>How old will I be in 2099?</summary>
  
  - ### Instruction:
    > Philip's just turned four and he wants to know how old he will be in various 
    years in the future such as 2090 or 3044. 
    > His parents can't keep up calculating this so they've begged you to help them
    out by writing a programme that can answer Philip's endless questions.
    > 
    > Your task is to write a function that takes two parameters: the year of birth 
    and the year to count years in relation to.
    > As Philip is getting more curious every day he may soon want to know how many 
    years it was until he would be born, so your function needs to work with both dates in the future and in the past.
    > 
    > Provide output in this format: For dates in the future: 
    > `"You are ... year(s) old."` 
    For dates in the past: `"You will be born in ... year(s)."` 
    > If the year of birth equals the year requested return: `"You were born this very year!"`
    > 
    > "..." are to be replaced by the number, followed and proceeded by a single space.
    > Mind that you need to account for both "year" and "years", depending on the result.
  - ### Solution:
    ```javascript
      const  calculateAge = (w1, w2) => {
        const age = w2 - w1;
        if (age === 0) return `You were born this very year!`;
          return (age > 0)?
            `You are ${age} year${age>1?'s':''} old.`:
            `You will be born in ${-age} year${-age>1?'s':''}.`;
      };
    ```
    #### Description:
      > TODO:
  </details>
  <details>
    <summary>Are you playing banjo?</summary>
  
  - ### Instruction:
    > Create a function which answers the question "Are you playing banjo?".
    If your name starts with the letter "R" or lower case "r", you are playing banjo!
    > 
    > The function takes a name as its only argument, and returns one of the following strings:
    > 
    > #### Examples:
    > ```javascript
    > name + " plays banjo" 
    > name + " does not play banjo"
    > ```
    > 
    > Names given are always valid strings.
  - ### Solution:
    ```javascript
      const areYouPlayingBanjo = name => {
          return (name[0].toUpperCase() ==="R")?
                `${name} plays banjo`:
                `${name} does not play banjo`;
      }
    ```
    #### Description:
      > TODO:
  
  </details>
  <details>
    <summary>The coupon code</summary>
  
  - ### Instruction:
    > #### Story:
    > 
    > Your online store likes to give out coupons for special occasions.
    Some customers try to cheat the system by entering invalid codes or using expired coupons.
    > 
    > #### Task:
    > 
    > Your mission:
    > Write a function called `checkCoupon` which verifies that a coupon code is valid and not expired.
    >
    > A coupon is no more valid on the day `AFTER` the expiration date. 
    > All dates will be passed as strings in this format: `"MONTH DATE, YEAR"`.
    > 
    > #### Examples:
    >
    > ```javascript
    >   checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
    >   checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
    > ```
  - ### Solution:
    #### Classic
    ```javascript
      const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
        const months = [
          "January", "February", "March", "April", "May",
          "June", "July", "August", "September", "October",
          "November", "December"];
    
        if (enteredCode === correctCode){
          const [_cmonth_day, _cyear] = currentDate.split(',');
          const [_emonth_day, _eyear] = expirationDate.split(',');
          if(Number(_cyear) <= Number(_eyear)){
              let [_cmonth, _cday] = _cmonth_day.split(' ');
              let [_emonth, _eday] = _emonth_day.split(' ');
              _cmonth = months.indexOf(_cmonth);
              _emonth = months.indexOf(_emonth);
              if(_cmonth < _emonth){
                  return true;
              } else if(_cmonth === _emonth) {
                return (Number(_cday) <= Number(_eday))? true: false;
              } else return false;
          } else return false;
      } else return false;
    };
    ```
    ### Short:
    ```javascript
      const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
          return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate);
      };
    ```
    #### Description:
      > `Classic` version it does not take into account any date notation other than: `Month day, year`
      > So this Version is incorrect/bad.
      
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
      const removeSmallest = (numbers) => {
        let new_tab = [...numbers];
        new_tab.splice(numbers.indexOf(Math.min(...numbers)), 1);
        return new_tab;
      };
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
  
  #### Part III - Iterators
  
  <details>
    <summary>Reduce</summary>
  
  - ### Instruction:
    > In this kata you will create a function that takes a list of
    non-negative integers and strings and returns a new list with the strings filtered out.
    > 
    > #### Examples:
    > 
    > ```javascript
    >   filter_list([1,2,'a','b']) == [1,2]
    >   filter_list([1,'a','b',0,15]) == [1,0,15]
    >   filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
    > ```
  
  - ### Solution:
    ```javascript
      const filter_list = (l) => l.filter(l => typeof l == 'number');
    ```
    #### Description:
    > TODO:
    
  </details>
  <details>
    <summary>Map method</summary>
  
  - ### Instruction:
    > The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
    They would like your help with an application form that will tell prospective members which category they will be placed.
    > 
    > To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
    > In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
    >
    > #### Input:
    > Input will consist of a list of lists containing two items each. 
    Each list contains information for a single potential member. 
    > Information consists of an integer for the person's age and an integer for the person's handicap.
    >
    > Note for F#: The input will be of (int list list) which is a List<List>
    >
    > #### Example Input:
    > 
    > ```javascript
    > [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
    > ```
    > #### Output
    > 
    > Output will consist of a list of string values (in Haskell: Open or Senior)
    > stating whether the respective member is to be placed in the senior or open category.
    > 
    > #### Example Output:
    > ```javascript
    > ["Open", "Open", "Senior", "Open", "Open", "Senior"]
    > ```
  
  - ### Solution
    #### Classic
    ```javascript
      const openOrSenior = data => data.map(d => {
        if(d[0] >= 55 && d[1] > 7) return 'Senior';
          else return 'Open';
      });
    ```
    #### Short
    ```javascript
      const openOrSenior = data => data.map( ([age, v]) => ( age >= 55 && v > 7)? 'Senior': 'Open');
    ```
    #### Description:
    > TODO:
    
  </details>
  <details>
    <summary>Switch/object/array</summary>
  
  - ### Instruction:
    > Complete the function which returns the weekday according to the input number:
    >
    > ```javascript
    > 1 returns "Sunday"
    > 2 returns "Monday"
    > 3 returns "Tuesday"
    > 4 returns "Wednesday"
    > 5 returns "Thursday"
    > 6 returns "Friday"
    > 7 returns "Saturday"
    > ```
    >
    > Otherwise returns `"Wrong, please enter a number between 1 and 7"`
  - ### Solution
    ```javascript
      function whatday(num) { 
        switch(num){
            case 1:
              return "Sunday";
              break;
            case 2:
              return "Monday";
              break;
            case 3:
              return "Tuesday";
              break;
            case 4:
              return "Wednesday";
              break;
            case 5:
              return "Thursday";
              break;
            case 6:
              return "Friday";
              break;
            case 7:
              return "Saturday";
              break;
            default:
              return "Wrong, please enter a number between 1 and 7";
              break;
        }
      }
    ```
    #### Description:
    > TODO:
    
  </details>
  <details>
    <summary>Map</summary>
  
  - ### Instruction:
    > Given an array of integers, return a new array with each value doubled.
    >
    > #### Examples:
    >
    > ```javascript [1, 2, 3] --> [2, 4, 6] ```
    >
    > For the beginner, try to use the `map` method - it comes in very handy quite a lot so is a good one to know.
  - ### Solution
    ```javascript
      const maps = (x) => x.map(i=>i*2);
    ```
    #### Description:
    > TODO:
    
  </details>
  <details>
    <summary>Concat/reduce</summary>
  
  - ### Instruction:
    > I'm new to coding and now I want to get the sum of two arrays...actually the sum
    of all their elements. I'll appreciate for your help.
    > 
    > P.S. Each array includes only integer numbers. Output is a number too.
  - ### Solution
    ```javascript
      const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a, cv) => a + cv);
    ```
    #### Description:
    > TODO:
    
  </details>
  <details>
    <summary>Includes()</summary>
  
  - ### Instruction:
    > You will be given an array `a` and a value `x`.
    All you need to do is check whether the provided array contains the value.
    >
    > Array can contain numbers or strings. `X` can be either.
    >
    > Return `true` if the array contains the `value`, false if not.
  - ### Solution
    ```javascript
      const check = (a, x) => a.includes(x);
    ```
    #### Description:
    > TODO:
  </details>
  
  #### Part VI - Object
  <details>
    <summary>Object regular</summary>
  
  - ### Instruction:
    > Regular Ball Super Ball
    > Create a class Ball.
    >
    > Ball objects should accept one argument for "ball type" when instantiated.
    > 
    > If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
    > ```javascript
    >   ball1 = new Ball();
    >   ball2 = new Ball("super");
    > 
    >   ball1.ballType     //=> "regular"
    >   ball2.ballType     //=> "super"
    > ```
  - ### Solution:
    ```javascript
      function Ball(ballType) {
        this.ballType = (ballType !== undefined)? ballType: "regular";
      };
    ```
    #### Description:
    > TODO:
  </details>
  
  #### Part V - Classes
  <details>
    <summary>Adam and Eva Classes</summary>
  
  - ### Instruction:
    > According to the creation myths of the Abrahamic religions,
    Adam and Eve were the first Humans to wander the Earth.
    >
    > You have to do God's job. The creation method must return an array 
    > of length 2 containing objects (representing `Adam` and `Eve`). 
    > The first object in the array should be an instance of the class `Man`.
    The second should be an instance of the class `Woman`. 
    > Both objects have to be subclasses of `Human`. 
    > Your job is to implement the `Human`, `Man` and `Woman` classes.
    > ```
  - ### Solution:
    ```javascript
     class God{
        static create(){
          return [new Man(), new Woman()];
        }
      }
      
    class Human extends God{
      constructor(){
        super();
      }
    }
    
    class Man extends Human {
      constructor(){
        super();
      }
    }

    class Woman extends Human{
      constructor(){
        super();
      }
    }
    ```
    #### Description:
    > TODO:
  </details>

### [ObjectTasks](https://github.com/kartofelek007/zadania-obiekty)
  TODO:
  
### [JavaScript-Algorithm-and-Data-Structur](https://github.com/trekhleb/javascript-algorithms/blob/master/README.pl-PL.md)
  TODO:
  
## Additional tasks:

One or more task from page:

- [adventofcode](https://adventofcode.com/)

One or more task from page:

- [scrimba](https://scrimba.com/learn/adventcalendar)

## Licenses

Preambles for different Licenses.

- [civiccommons](http://wiki.civiccommons.org/Choosing_a_License/)
