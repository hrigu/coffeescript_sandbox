#for namespacing my stuff...an object that contains all other stuff
this.mylib = {}

########################
####basics##########
########################

#an array
mylib.major = ["do", "mi", "so", "ti"]
# a function
mylib.my_func = (a, b) -> a + b

########################
####functional##########
########################

mylib.increment = (what) ->
	what()+1
	
mylib.foreach = (array, func) ->
	func(i) for i in array	
	

########################
####object oriented#####
########################
	
class mylib.Animal
	constructor: (@name) ->
	talk: -> 
		
class mylib.Lion extends mylib.Animal
	talk: -> "wrooahh!" 
