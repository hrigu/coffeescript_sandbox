(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  this.mylib = {};

  mylib.major = ["do", "mi", "so", "ti"];

  mylib.my_func = function(a, b) {
    return a + b;
  };

  mylib.increment = function(what) {
    return what() + 1;
  };

  mylib.foreach = function(array, func) {
    var i, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = array.length; _i < _len; _i++) {
      i = array[_i];
      _results.push(func(i));
    }
    return _results;
  };

  mylib.Animal = (function() {

    function Animal(name) {
      this.name = name;
    }

    Animal.prototype.talk = function() {};

    return Animal;

  })();

  mylib.Lion = (function(_super) {

    __extends(Lion, _super);

    function Lion() {
      Lion.__super__.constructor.apply(this, arguments);
    }

    Lion.prototype.talk = function() {
      return "wrooahh!";
    };

    return Lion;

  })(mylib.Animal);

}).call(this);
