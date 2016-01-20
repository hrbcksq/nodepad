//Closure example

var func = function(){
	var i = 10;
	return function(){
		return i;	
	}
	
};
var innerFunc = func();

var func_1 = function(){
	var i = 20;
	console.log(func()());
};
func_1();

//Simple closed counter

var counter = (function(){
	var index = 0;
	return function(){
		return index++;
	}
})();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


//Simple dynamic counter

var counter = (function(){
	var index = 0;
	return function(count){
		index = count !== undefined ? count : index;
		return index++;
	}
})();

console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());

//Another sample whiout closure

var counter = function(num){
	counter.count = num !== undefined ? num : counter.count;	
	return counter.count++;
}

counter.count = 0;

console.log(counter());
console.log(counter());
console.log(counter());

