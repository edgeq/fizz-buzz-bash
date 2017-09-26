function fizzBuzz() {
	//create a for loop
	for (var i=1; i <= 100; i++){
		//set a variable to print
		
		//set conditionals for what to print
		
		//if it's divisible by 3 log Fizz
		if (i % 3 === 0 && i % 5 === 0){
				console.log("FizzBuzz");

		} 
		else if (i % 3 === 0){
			console.log("Fizz");
		}
		//if it's divisible by 5, log Buzz
		else if (i % 5 === 0) {
			console.log("Buzz");
		}
		//if it's divisible by both, log FizzBuzz
		else {
			console.log(i);
		}
	}
};


fizzBuzz();