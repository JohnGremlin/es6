'use strict';

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'dolboeb@mail.com';

var person = {
	firstName: firstName,
	lastName: lastName,
	email: email,
	sayHello: function sayHello() {
		console.log('Hi ' + firstName + ' ' + lastName);
	}
};

Object.defineProperty(person, 'fullName', {
	get: function get() {
		return this.firstName + ' ' + this.lastName;
	},
	set: function set(value) {
		this.firstName = value;
	}
});

console.log(person);

// person.sayHello();

// person.firstName;
// person['firstName'];

// let property = 'firstName';
// person[property]; //person['firstName'];
// person = {
// 	[property]: 'Bill'
// }

// function createCar(property, value){
// 	return {
// 		[property]: value,
// 		['_' + property]: value,
// 		[property.toUpperCase()]: value,
// 		['get' + property](){
// 			return this[property];
// 		}
// 	};
// }

// console.log(createCar('vin', 1));