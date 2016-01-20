/*Numbers*/

//dex
console.log(0); console.log(5);
//hex
console.log(0xff); console.log(0XFf);
//oct, begins from zero
console.log(01); console.log(011);
//float
console.log(1.5);console.log(.6);
//epx
console.log(1e3);console.log(1e-3);

//Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.pow(2,2));
console.log(Math.sqrt(4));

//Object Wrappers

var primitive = 13;
console.log(typeof primitive)

var wrapped = new Number(1000);
console.log(typeof wrapped)

console.log(wrapped.toFixed(3));
console.log(primitive.toFixed(3));

//Создание объекта обертки на лету, для простого типа, после выполнения оберка уничтожается
console.log(wrapped.toExponential(4))
console.log(2 .toFixed(5));

/*exception, try parse 2.# as number*/
// console.log(2.toFixed(5));

console.clear();

//Overflow
console.log(1e309);
//Underflow
console.log(1e-340);

console.log(Math.sqrt(4));

//Infinity - ведет себя как и в математике
var inf = Infinity;
console.log(typeof Infinity);
console.log(Infinity + Infinity); // return infinity
console.log(Infinity * Infinity); // return infinity
console.log(Infinity += 1); // return infinity
console.log(Infinity -= 1); // return infinity
console.log(Infinity - Infinity); // return NaN
console.log(Infinity / Infinity); // return NaN

console.log(Infinity >= Infinity); // return true
console.log(Infinity < Infinity); // return false

//Zero, NaN
console.log(typeof NaN); // return number
console.log(6/0); // return Infinity!!!!!!
console.log(0/0); // return NaN
console.log(Math.sqrt(-1));  // return NaN

// Оссобенности

// сравнение без приведения типов
console.log(10 === 10); //true

// сравнние с приведение типов
console.log(10 == "10"); //true

//Nan\Infinity indefiner
console.log(NaN === NaN); //false
console.log(Infinity === Infinity); //true

//Float problem
console.log(0.2 + 0.1); // return = 0.30000000000000004
console.log(10000000000000000 + 5) // return = 10000000000000004

//Непростое округление
console.log(3.2455453 | 0); //при приведении числа в битовый формат берется челая часть
console.log(~~3.2455453); // ~~3.2455453 => ~(-3) -> 3



