let firstName = 'Bill',
	lastName = 'Gates',
	email = 'dolboeb@mail.com';

let person = {
	firstName: firstName,
	lastName: lastName,
	email: email,
	sayHello(){
		console.log(`Hi ${firstName} ${lastName}`);
	},
	get fullName(){
		return this.firstName + ' ' + this.lastName;
	}
	set fullName(value){
		this.firstName = value;
	}
};

// Object.defineProperty(person, 'fullName', {
// 	get: function() {
// 		return this.firstName + ' ' + this.lastName;
// 	},
// 	set: function(value){
// 		this.firstName = value;
// 	}
// });


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