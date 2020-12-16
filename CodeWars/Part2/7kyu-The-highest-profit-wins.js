const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];

// Sample Tests:
var test = function(arr, res){
    Test.assertSimilar(minMax(arr), res, "tested on " + JSON.stringify(arr) + ":");
  };
  
  Test.describe("minMax", function(){
    Test.it("should work for some examples", function(){
      var i, r;
      test([1,2,3,4,5], [1,5]);
      test([2334454,5], [5, 2334454]);
      
      for(i = 0; i < 20; ++i){
        r = Math.random();
        test([r], [r,r]);
      }   
    });
  });