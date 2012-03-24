(function() {

  describe("major", function() {
    return it("has a 'ti'", function() {
      return expect(mylib.major[3]).toBe("ti");
    });
  });

  describe("my function 'sum'", function() {
    it("can compute the sum of two numbers correctly", function() {
      return expect(mylib.my_func(1, 2)).toBe(3);
    });
    return it("can handle negative numbers", function() {
      return expect(mylib.my_func(-1, -2)).toBe(-3);
    });
  });

  describe("functional programming", function() {
    describe("The increment function", function() {
      return it("can call the parameter as a function and increment the result", function() {
        return expect(mylib.increment(function() {
          return 1 + 2;
        })).toBe(4);
      });
    });
    return describe("my foreach function", function() {
      var sum;
      sum = function(numbers) {
        var total;
        total = 0;
        mylib.foreach(numbers, function(i) {
          return total += i;
        });
        return total;
      };
      it("can iterate over an array an call the given function with each member", function() {
        return expect(sum([1, 2])).toBe(3);
      });
      return it("returns itself an array", function() {
        var func;
        func = function(i) {
          return i + i;
        };
        return expect(mylib.foreach([1, 2], func)).toEqual([2, 4]);
      });
    });
  });

  describe("An object of type 'Animal'", function() {
    var animal, name;
    name = "Simson";
    animal = null;
    beforeEach(function() {
      return animal = new mylib.Animal(name);
    });
    it("is an instance of Animal", function() {
      return expect(animal instanceof mylib.Animal).toBeTruthy;
    });
    return it("is called " + name, function() {
      return expect(animal.name).toBe(name);
    });
  });

  describe("An object of type 'Lion'", function() {
    var lion;
    lion = null;
    beforeEach(function() {
      return lion = new mylib.Lion("Abraham");
    });
    it("is an instance of Lion", function() {
      return expect(lion instanceof mylib.Lion).toBeTruthy;
    });
    it("is an instance of Animal", function() {
      return expect(lion instanceof mylib.Animal).toBeTruthy;
    });
    it("is called 'Abraham'", function() {
      return expect(lion.name).toBe("Abraham");
    });
    return it("can talk", function() {
      return expect(lion.talk()).toBe("wrooahh!");
    });
  });

}).call(this);
