// simple instructions

 if (true) {} else {}
 if (true) {} else if (true) {}

switch(true){
	case true: break;
	case false: break;
	default: {}
}

var test = false ? false : false ? false : true;

console.log((10,11)); // vat temp = (10,11) => temp = 10 = 11
console.log((test,"hell0"));

// loops extensions

//  ES5 циклы не создают отдельной области видимости
for(var index = 0; index < 10; index++) ;
console.log(index);

//  ES6 let - создаст переменную в области цикла 
// for(let scope_index = 0; scope_index < n; scope_index++)

// infinity loop
// for(;;);

// упрощенный синтаксис
//for (var index = 10;/*i > 0*/ i--) //  /*i > 0*/ - автоматиески выполнитка как false

//стандартный while
// while(true){}

//упрошенный
// var i = 10;
// while (i--) {}

//do-while
// do {} while {false}







