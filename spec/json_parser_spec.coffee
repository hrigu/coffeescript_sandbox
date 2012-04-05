describe "json_parser", ->
	parser = null
	beforeEach ->
		parser = new mylib.Parser()
		
	it "should be initializable", -> 
		expect(parser instanceof mylib.Parser).toBe true
	it "should parse checkboxes ", ->
		desc = [
			id: "eins", checked: false, friends: ["zwei"], type: "normal"			
		,	
			id: "zwei", checked: true, type: "super"			
		]
		
		checkboxes = parser.parse(desc)
		expect(checkboxes.length).toBe 2
		eins = checkboxes[0]
		expect(eins instanceof mylib.Checkbox).toBe true
		expect(eins.id).toBe "eins"
		expect(eins.checked).toBe false
		friend = eins.friends[0]
		expect(friend instanceof mylib.Checkbox).toBe true
		expect(friend.id).toBe "zwei"
		zwei = checkboxes[1]
		expect(zwei.id).toBe "zwei"
		expect(zwei.friends.length).toBe 0
		
		
		 
