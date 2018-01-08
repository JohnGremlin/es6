var buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++){
	var button = buttons[i];
	button.innerText = i;

	button.onClick = function(e){
		console.log(i);
	};
	
}