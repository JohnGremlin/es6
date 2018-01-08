'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
	console.log('Hello ' + name);
}

greet('Bill');

function createEmail(to, from, subject, message) {
	console.log('\n\t\tTo: ' + to + '\n\t\tFrom: ' + from + '\n\t\tSubject: ' + subject + '\n\t\tmessage: ' + message + '\n\t');
}

createEmail('john@mail.com', 'jane@mail.com', 'Hello', 'GoodBye');

function add(x, y) {
	console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}
add('5', '7');

var name = 'Bill';

console.log(upperName(_templateObject, name));

function upperName(literals, value) {
	return literals[0] + value.toUpperCase();
}