// function greet(greeting, name){
// 	console.log(`${greeting} ${name}`);
// }


// greet('hi', 'Bill');
// greet('Hi');
// greet();

// function greet(greeting, name){
// 	if(greeting !== undefined && name !== undefined){
// 		console.log(`${greeting} ${name}`);
// 	} else if (greeting === undefined && name !== undefined){
// 		console.log(`Hello ${name}`);
// 	} else if (greeting !== undefined && name === undefined){
// 		console.log(`${greeting} friend`);
// 	} else {
// 		console.log('Hello friend');
// 	}
// }
function greet(greeting = 'Hello', name = 'Friend'){
	console.log(`${greeting} ${name}`);
};

greet('hi', 'Bill');
greet('Hi');
greet(undefined,'Bill');
greet();


function sum(...values){
	console.log(values instanceof Array);

	let sum = 0;

	values.forEach(function (value){
		sum += value;
	});

	console.log(sum);
}

function sum(...values){
	console.log(values.reduce(function(prevValue, currentValue){
		return prevValue + currentValue;
	}));
}

sum(5,6,12,40,1);
