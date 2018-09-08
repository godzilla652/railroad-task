function Station(number, name){
		this.number = number;
		this.is_train = false;
		this.next = undefined;
		this.prev = undefined;
		this.start = false;
		this.end = false;
		this.danger = false;
		this.name = name;
	}

function Line(amount, name, current_position, people){
	this.body = [];
	this.current = undefined;
	this.name = name;
	this.reverse = false;
	this.people = people;
	for(var i = 0; i < amount; i++){
		this.body.push(new Station(i))//Making stations
		this.body[i].name = name;
	}
	for(var i = 0; i < amount; i++){//Initializaing stations
		if(i == 0){
			this.body[i].prev = null;
			this.body[i].start = true;
		}
		if(i == amount-1){
			this.body[i].next = null;
			this.body[i].end = true;
		}
		this.body[i].next = this.body[i+1];
		this.body[i].prev = this.body[i-1];
		}
		this.current = this.body[current_position];
		this.current.is_train = true;

		this.switch = function(){
			this.reverse ? this.reverse = false : this.reverse = true;
		}

		this.stay = function(){
			return
		}

		this.move = function(){
			!this.reverse ? this.next() : this.prev()
		}
		this.next = function(){
			if(this.current.end){
				this.switch()
				this.prev();
				return
			}
			this.current.is_train = false
			this.current = this.current.next;
			this.current.is_train = true
		}
		this.prev = function(){
				if(this.current.start){
				this.switch()
				this.next();
				return
			}
			this.current.is_train = false
			this.current = this.current.prev;
			this.current.is_train = true
		}



	}


var Railroad = {
		init: function(a,b,c){
			try{this.lines = [new Line(7, 'A', a, 10),new Line(6, 'B', b, 120),new Line(6, 'C', c, 30)]}
			catch{console.log('Incorrect input...')}
			this.people = [this.lines[0].people, this.lines[1].people, this.lines[2].people]
		},
		constructor: function(){
			this.refresh = function(){
			this.coords = [this.lines[0].current.number, this.lines[1].current.number, this.lines[2].current.number]

			this.stations = [this.lines[0].current, this.lines[1].current, this.lines[2].current]

			this.directions = [this.lines[0].reverse, this.lines[1].reverse, this.lines[2].reverse]
		}


		this.check = function(){
			if(this.coords[0] == 2 && this.coords[2] == 2)
			{
				console.log('collision A - C')
			}
			else if(this.coords[0] == 4 && this.coords[1] == 3)
			{
				console.log('collision A - B')
			}
			else if(this.coords[2] == 3 && this.coords[1] == 2)
			{
				console.log('collision C - B')
			}
		}

		this.count_people = function(){
			this.a_more_b = undefined
			this.a_more_c = undefined
			this.b_more_c = undefined

		if(this.people[0] > this.people[1]){
			this.a_more_b = true
		}
		else{
			this.a_more_b = false
		}
		if(this.people[0] > this.people[2]){
			this.a_more_c = true
		}
		else{
			this.a_more_c = false
		}
		if(this.people[1] > this.people[2]){
			this.b_more_c = true
		}
		else{
			this.b_more_c = false
		}
	}
		this.get_max = function(){
			let max_one = Math.max(this.people[0],this.people[1],this.people[2])
			if(this.lines[0].people == max_one)
			{
				this.the_max = this.lines[0]
			}
			else if(this.lines[1].people == max_one)
			{
				this.the_max = this.lines[1]
			}
			else if(this.lines[2].people == max_one)
			{
				this.the_max = this.lines[2]
			}
		}
		this.get_max()
		this.move = function(){

			this.go_A = true
			this.go_B = true
			this.go_C = true

			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			if((this.coords[0] == 1 && this.coords[2] == 1 && this.directions[0] == false && this.directions[2] == false && this.a_more_c)
			||
			  (this.coords[0] == 3 && this.coords[2] == 3 && this.directions[0] == true && this.directions[2] == true && this.a_more_c))
			{
				this.go_A = true
			}
			if((this.coords[0] == 1 && this.coords[2] == 1 && this.directions[0] == false && this.directions[2] == false && !this.a_more_c)
				||
				(this.coords[0] == 3 && this.coords[2] == 3 && this.directions[0] == true && this.directions[2] == true && !this.a_more_c))
			{
				this.go_A = false
			}
			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			if((this.coords[0] == 3 && this.coords[1] == 2 && this.directions[0] == false && this.directions[1] == false && this.a_more_b)
			||
			  (this.coords[0] == 5 && this.coords[1] == 4 && this.directions[0] == true && this.directions[1] == true && this.a_more_b))
			{
				this.go_A = true
			}
			if((this.coords[0] == 3 && this.coords[1] == 2 && this.directions[0] == false && this.directions[1] == false && !this.a_more_b)
				||
				(this.coords[0] == 5 && this.coords[1] == 4 && this.directions[0] == true && this.directions[1] == true && !this.a_more_b))
			{
				this.go_A = false
			}
			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			if((this.coords[1] == 1 && this.coords[2] == 2 && this.directions[1] == false && this.directions[2] == false && this.b_more_c)
			||
			  (this.coords[1] == 3 && this.coords[2] == 4 && this.directions[1] == true && this.directions[2] == true && this.b_more_c))
			{
				this.go_B = true
			}
			if((this.coords[1] == 1 && this.coords[2] == 2 && this.directions[1] == false && this.directions[2] == false && !this.b_more_c)
				||
				(this.coords[1] == 3 && this.coords[2] == 4 && this.directions[1] == true && this.directions[2] == true && !this.b_more_c))
			{
				this.go_B = false
			}
			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			//QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
			//QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
			if(this.coords[0] == 1 && this.directions[0] == false && this.coords[2] == 3 && this.directions[2] == true && this.a_more_c)
			{
				this.go_A = true
			}
			if(this.coords[0] == 1 && this.directions[0] == false && this.coords[2] == 3 && this.directions[2] == true && !this.a_more_c)
			{
				this.go_A = false
			}
			//QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
			if(this.coords[0] == 3 && this.directions[0] == true && this.coords[2] == 1 && this.directions[2] == false && this.a_more_c)
			{
				this.go_A = true
			}
			if(this.coords[0] == 3 && this.directions[0] == true && this.coords[2] == 1 && this.directions[2] == false && !this.a_more_c)
			{
				this.go_A = false
			}
			//QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
			//QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
			if(this.coords[0] == 3 && this.directions[0] == false && this.coords[1] == 4 && this.directions[1] == true && this.a_more_b)
			{
				this.go_A = true
			}
			if(this.coords[0] == 3 && this.directions[0] == false && this.coords[1] == 4 && this.directions[1] == true && !this.a_more_b)
			{
				this.go_A = false
			}
			//QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
			if(this.coords[0] == 5 && this.directions[0] == true && this.coords[1] == 2 && this.directions[1] == false && this.a_more_b)
			{
				this.go_A = true
			}
			if(this.coords[0] == 5 && this.directions[0] == true && this.coords[1] == 2 && this.directions[1] == false && !this.a_more_b)
			{
				this.go_A = false
			}
			//QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
			if(this.coords[1] == 1 && this.directions[1] == false && this.coords[2] == 4 && this.directions[2] == true && this.b_more_c)
			{
				this.go_B = true
			}
			if(this.coords[1] == 1 && this.directions[1] == false && this.coords[2] == 4 && this.directions[2] == true && !this.b_more_c)
			{
				this.go_B = false
			}
			//QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
			if(this.coords[1] == 3 && this.directions[1] == true && this.coords[2] == 2 && this.directions[2] == false && this.b_more_c)
			{
				this.go_B = true
			}
			if(this.coords[1] == 3 && this.directions[1] == true && this.coords[2] == 2 && this.directions[2] == false && !this.b_more_c)
			{
				this.go_B = false
			}
			//QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
			//QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ

			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			if(this.coords[0] == 3 && this.directions[0] == false && this.coords[1] == 2 && this.directions[1] == false && this.coords[2] == 2 && this.directions[2] == false)
			{
				if(this.the_max.name == 'A')
				{
					this.go_B = false
					this.go_C = false
				}
				if(this.the_max.name == 'B')
				{
					this.go_A = false
				}
				if(this.the_max.name == 'C')
				{
					this.go_A = false
				}
			}
			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			if(this.coords[0] == 3 && this.directions[0] == true && this.coords[1] == 3 && this.directions[1] == true && this.coords[2] == 3 && this.directions[2] == true)
			{
				if(this.the_max.name == 'A')
				{
					this.go_B = false
					this.go_C = false
				}
				if(this.the_max.name == 'B')
				{
					this.go_A = false
				}
				if(this.the_max.name == 'C')
				{
					this.go_A = false
				}
			}
			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			this.go_A ? this.lines[0].move() : this.lines[0].stay()

			this.go_B ? this.lines[1].move() : this.lines[1].stay()

			this.go_C ? this.lines[2].move() : this.lines[2].stay()





			this.refresh()
			this.check()


		}// end of move function

	this.count_people()
	this.refresh()
	}
}









var road = Object.create(Railroad)
road.init(0,0,0)
road.constructor()


var a = road.lines[0];
var b = road.lines[1];
var c = road.lines[2];

var say_end = function(){
	console.log('Testing has been complete...')
}
var testing = function(callback){
	for(var i = 0; i < 1000; i++){
		road.move()
	}
	callback()
}
testing(say_end)
