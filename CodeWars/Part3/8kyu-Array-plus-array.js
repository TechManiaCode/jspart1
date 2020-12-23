const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a, cv) => a + cv);

// Sample tests:
Test.describe("Basic tests",function(){
    Test.assertEquals(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    Test.assertEquals(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
    Test.assertEquals(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
    Test.assertEquals(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
  })
