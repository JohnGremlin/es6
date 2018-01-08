class Task{
	constructor(title = Task.getDefaultTitle()) {
 		this.title = title;
 		this._done = false;
 		Task.count += 1;
 		console.log("Создание таска");
	}
	get done(){
		return this._done === true ? 'Yes' : 'No';
	}
	set done(value){
		if(value !== undefined && typeof value === 'boolean'){
			this._done = value
		} else{
			console.error('Error! Need to take true or false');
		}
	}

	complete(){
		this.done = true;
		console.log(`TASK "${this.title}" done`);
	}

	static getDefaultTitle(){
		return 'TASK';
	}

}

Task.count = 0;

let task = new Task('Delete this shit');

console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);