(function() {
  var mylib;

  mylib = this.mylib;

  mylib.Parser = (function() {

    function Parser() {
      this.checkboxes = [];
    }

    Parser.prototype.parse = function(checkboxes_desc) {
      var cb_desc, friends, _i, _len;
      console.log(checkboxes_desc);
      for (_i = 0, _len = checkboxes_desc.length; _i < _len; _i++) {
        cb_desc = checkboxes_desc[_i];
        friends = [];
        if (cb_desc.friends !== void 0) friends = cb_desc.friends;
        this.checkboxes.push(new mylib.Checkbox(cb_desc.id, cb_desc.checked, friends));
      }
      this._resolveFriends();
      return this.checkboxes;
    };

    Parser.prototype._resolveFriends = function() {
      var checkbox, friendId, friends, _i, _j, _len, _len2, _ref, _ref2, _results;
      _ref = this.checkboxes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        checkbox = _ref[_i];
        friends = [];
        _ref2 = checkbox.friends;
        for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
          friendId = _ref2[_j];
          friends.push(this._find(friendId));
        }
        _results.push(checkbox.friends = friends);
      }
      return _results;
    };

    Parser.prototype._find = function(id) {
      var checkbox, found, _i, _len, _ref;
      found = null;
      _ref = this.checkboxes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        checkbox = _ref[_i];
        if (checkbox.id === id) found = checkbox;
      }
      return found;
    };

    return Parser;

  })();

  mylib.Checkbox = (function() {

    function Checkbox(id, checked, friends) {
      this.id = id;
      this.checked = checked;
      this.friends = friends != null ? friends : [];
    }

    return Checkbox;

  })();

}).call(this);
