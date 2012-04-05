mylib = this.mylib

class mylib.Parser
	constructor: () ->
		@checkboxes = []
					
	
	parse: (checkboxes_desc) ->
		console.log checkboxes_desc
		
		for cb_desc in checkboxes_desc
			friends = []
			friends = cb_desc.friends if cb_desc.friends != undefined
			this.checkboxes.push new mylib.Checkbox(cb_desc.id, cb_desc.checked, friends)
		this._resolveFriends()
		this.checkboxes
		
	_resolveFriends: ->
		for checkbox in @checkboxes
			friends = []
			for friendId in checkbox.friends
				friends.push this._find(friendId)
			checkbox.friends = friends	
				
	_find: (id) ->
		found = null
		for checkbox in @checkboxes
			found = checkbox if checkbox.id == id
		found

class mylib.Checkbox
	constructor: (@id, @checked, @friends = []) ->			
		
		