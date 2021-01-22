function Ball(ballType) {
    this.ballType = (ballType !== undefined)? ballType: "regular";
  };


  // Sample Tests:
// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message)
Test.assertEquals(new Ball().ballType, "regular");
Test.assertEquals(new Ball("super").ballType, "super");