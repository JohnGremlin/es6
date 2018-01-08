class Task{
	constructor(title){
		this.title = title;
		this.done = false;
		console.log("Task creation");
	}
	complete(){
		this.done = true;
		console.log(`TASK "${this.title}" is Done`);
	}
}

class SubTask extends Task{
	constructor(title, parent){
		super(title);
		this.parent = parent;
		console.log("SubTask creation");
	}
	complete(){
		super.complete();
		console.log(`SubTask "${this.title}" is Done`);
	}
}

let task = new Task('learn js');
let subtask = new SubTask('learn es6', task);

task.complete();
subtask.complete();
console.log(task);
console.log(subtask);