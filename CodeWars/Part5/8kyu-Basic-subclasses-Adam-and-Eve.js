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

  // Sample Tests:
Test.describe("GodTest", function() {
    Test.it("Adam should be a Man", function() {
      let humans = God.create()
      Test.assertEquals(humans[0] instanceof Man, true, 'Expected Adam to be a Man');
    });
});
