//Simple declaration
/*function name(args) {	
	return args;
}*/

//Declare as object
var func = function (args) {	
	console.log(arguments);
	return "return: " + args;
};

//Samples
console.log(func());
console.log(func("args"));
console.log(func("args","args1"));

//Funct as return value
var func = function(){
	return function(){
		return "inner call";
	}
}
console.log(func()());


//Important self-invoked-anonymus function
var value = function(args){
	console.log("self-call function")
	return args;
}("self-call function return value");

console.log(value); 
console.log(typeof value);

//Scope

//Only functons can create local scope
// при обращении к переменной, инетрпритатор в случае не нахождении оной в текущем скопе, обратится к родительскому скопу

//для глобльных можно не писать var
var index = -1;

var func = function() {
	// var создает переменную index, иначе произойдет обращение к родительскому скопу
	var index = 0;	
	console.log(index);
	var inner = function(){
		//интепритатор создаст обрватится к вышестоящему скопу		
		console.log(index);	// return 0
	}();	
	//hoisting
	var inner = function(){		
		//интепритатор заранее анализирует scope на предмет объявления переменных
		//интепритатор по сути поднимает объявления всех переменных в начало scope, объявление без инициализации		
		//var index;
		console.log(index);	// return undefined 	
		var index = 0;
	}();	
}();





