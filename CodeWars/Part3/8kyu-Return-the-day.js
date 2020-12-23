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

  // Sample Tests:
  describe( "whatday", function(){
    it( "should work for the examples" , function(){
      Test.assertEquals(whatday(1),'Sunday')
      Test.assertEquals(whatday(2), 'Monday')
      Test.assertEquals(whatday(3),'Tuesday')
         Test.assertEquals(whatday(8),  'Wrong, please enter a number between 1 and 7')
      Test.assertEquals(whatday(20),  'Wrong, please enter a number between 1 and 7')
  
        });
  });