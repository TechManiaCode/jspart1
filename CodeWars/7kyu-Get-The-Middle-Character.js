// First Version
/* 
const getMiddle = (s) => {
  //Code goes here!
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
*/

const getMiddle = (s) => {
    //Code goes here!
    if(s.length > 0 && s.length < 1000){
      const _mid = Math.floor(s.length / 2);
      return (s.length % 2 === 0)? s[_mid - 1] + s[_mid]: s[_mid];
    }
  };

// Sample Tests:
Test.describe("GetMiddle", function() {
    Test.it("Tests", function() {
      Test.assertEquals(getMiddle("test"),"es");
      Test.assertEquals(getMiddle("testing"),"t");
      Test.assertEquals(getMiddle("middle"),"dd");
      Test.assertEquals(getMiddle("A"),"A");
    });
  });