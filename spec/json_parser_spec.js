(function() {

  describe("json_parser", function() {
    var parser;
    parser = null;
    beforeEach(function() {
      return parser = new mylib.Parser();
    });
    it("should be initializable", function() {
      return expect(parser instanceof mylib.Parser).toBe(true);
    });
    return it("should parse checkboxes ", function() {
      var checkboxes, desc, eins, friend, zwei;
      desc = [
        {
          id: "eins",
          checked: false,
          friends: ["zwei"],
          type: "normal"
        }, {
          id: "zwei",
          checked: true,
          type: "super"
        }
      ];
      checkboxes = parser.parse(desc);
      expect(checkboxes.length).toBe(2);
      eins = checkboxes[0];
      expect(eins instanceof mylib.Checkbox).toBe(true);
      expect(eins.id).toBe("eins");
      expect(eins.checked).toBe(false);
      friend = eins.friends[0];
      expect(friend instanceof mylib.Checkbox).toBe(true);
      expect(friend.id).toBe("zwei");
      zwei = checkboxes[1];
      expect(zwei.id).toBe("zwei");
      return expect(zwei.friends.length).toBe(0);
    });
  });

}).call(this);
