//Object literal syntax
var item = {
	//property
	name : "object",
	value : "base value",
	//method
	method : function(){
		return "method call";
	}
}

//Property access expression
console.log(item.name);

//Dynamic access expression 
console.log(item["name"]);

//Dynamic property create
//console.log(item);
item.count = 1; // or item["count"] = 1;
//console.log(item);
console.log(item.count);

//Method access
console.log(item.method()); // or console.log(item["method"]());

//Old syntax
var object = new Object();
object.property = "property";

//Static method create
var prototype = item; 
var object = Object.create(prototype);  // item now is prototype
console.log(object);

//Object does not has own property value

console.log(object.hasOwnProperty("value"));
console.log(object.value); //access to prototype property

//Create own property
object.value = "inheritor value";
console.log(object.hasOwnProperty("value"));
console.log(object.value);

//Delete property
delete object.value;
console.log(object)

//Check property 
console.log("value" in object);
console.log("empty" in object);

//Important
var obj = {};
console.log(obj.value); // undefined
console.log("value" in obj); // false

obj.value = undefined;
console.log(obj.value); // undefined
console.log("value" in obj); // true



