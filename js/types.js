/*Prinitive types, immutable*/

var myNumber = 1024,
	myString = "string",
	myBool = true,
	myNull = null;
	myUndefined = undefined;

//Числовые типы, по сути дела только вещественные числа
console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull);
console.log(typeof myUndefined);

/*Object types, unimmutable*/

var obj = {name: "hrbcksq"},
	array = [1,2,3],
	regex = /w+/g,
	func = function(){};

console.log(obj);
console.log(array);
console.log(regex);
console.log(func);

console.clear();
