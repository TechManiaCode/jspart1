const  calculateAge = (w1, w2) => {
    const age = w2 - w1;
    if (age === 0) return `You were born this very year!`;
    return (age > 0)?
      `You are ${age} year${age>1?'s':''} old.`:
      `You will be born in ${-age} year${-age>1?'s':''}.`;
  };

// Sample Tests:
Test.describe("Random test cases", function() {
    Test.assertEquals(calculateAge(2012, 2016),"You are 4 years old.");
    Test.assertEquals(calculateAge(1989, 2016),"You are 27 years old.");
    Test.assertEquals(calculateAge(2000, 2090),"You are 90 years old.");
    Test.assertEquals(calculateAge(2000, 1990),"You will be born in 10 years.");
    Test.assertEquals(calculateAge(3400, 3400),"You were born this very year!"); 
    Test.assertEquals(calculateAge(900, 2900),"You are 2000 years old.");
    Test.assertEquals(calculateAge(2010, 1990),"You will be born in 20 years.");
    Test.assertEquals(calculateAge(2010, 1500),"You will be born in 510 years.");
    Test.assertEquals(calculateAge(2011, 2012),"You are 1 year old.");
    Test.assertEquals(calculateAge(2000, 1999),"You will be born in 1 year.");
})