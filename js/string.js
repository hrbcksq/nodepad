// strings // two bytes for one symbol

console.log("Hello: 'Bună ziua'");

console.log('Bye: "La revedere"');

// screening
console.log('Sorry: \'Scuzați-mă\' or \'Pardon\''); //скузаци-мэ

// Spetial notes
/*	
	\ - in end of string means continue sting in next line;
	\\ - it means '/'
	Sample: 
*/
console.log("Good morning:\n\t'Bună dimineața' \\ 'Бунэ диминяца' \
	\nGood arternoon:\n\t'Bună ziua' \\ 'Бунэ зиуа' \
	\nGoog Evening:\n\t'Bună seara' \\ 'Бунэ сяра' \
	\nGoodnight:\n\t'Noapte bună' \\ 'Ноапте бунэ'");

// functions


var string = "Thank you: 'Muțumesc' - 'мульцумеск' Please: 'Va rog' - 'вэ рог' Good\\well: 'Bine' - 'винэ'";

console.log(string.length);
console.log(string.charAt(0));

//substring(from,to)
console.log(string.substring(0,string.indexOf("P")));
console.log(string.substring(string.indexOf("P"),string.lastIndexOf("G")));
//substring(from)
console.log(string.substring(string.indexOf("G")));

string = "Do you speak English? - 'Vorbiti englezeste?'' - 'Ворбиць энглезеште?'\nMy name is ... - 'Mă numesc ...' - 'Мэ нумеск ...'";

//substr(from, take_symbols)
console.log(string.substr(0,70));
//slice(from(can be negative))
console.log(string.slice(-50));

string = "I dont understand: 'Nu înțeleg' - 'ну ынцеэг'"

console.log(string.toLowerCase());

//Clear
console.clear();

var complete = "Yes: Da\nNo: Nu\nPlease: Va rog\nThank you: Muțumesc\nHello: Bună ziua\nGoogbye: La Revedere\nSorry: Pardon or Scuzați-mă\nGoog\\Well: Bine\nI dont understand: Nu înțeleg\nDo you speak English: Vorbiți englezeste\nGood morning: Bună dimineața\nGood arternoon: Buze ziua\nGood evening: Buna seara\nGoodnight: Noapte buna\nMy name is...: Mă numesc...";

complete.split("\n").forEach(function(item){console.log(item);})








