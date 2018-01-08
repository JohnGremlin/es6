function greet(name){
	console.log(`Hello ${name}`);
}

greet('Bill');


function createEmail(to, from, subject, message){
	console.log(`
		To: ${to}
		From: ${from}
		Subject: ${subject}
		message: ${message}
	`)
}

createEmail('john@mail.com', 'jane@mail.com', 'Hello', 'GoodBye');

function add(x,y){
	console.log(`${x} + ${y} = ${parseInt(x)+parseInt(y)}`);
}
add('5','7');

let name = 'Bill';

console.log(upperName`Hello ${name}`);

function upperName(literals, value){
	return literals[0] + value.toUpperCase();
}