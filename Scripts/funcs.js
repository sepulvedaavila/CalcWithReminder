function addNumber(value){
	input = document.getElementById("resultado");
	number = parseFloat(value);
	input.value += value;
}

function clearText(){
	input = document.getElementById("resultado");
	input.value = "";
}

function equals(){
	str = document.getElementById('resultado').value;
	result = eval(str);
	document.getElementById('resultado').value = result;
}

function acordeon(){
	value = document.getElementById('resultado').value;
	if (value === '123'){
		window.location.assign('nuevo.html');
	}
	if(value === '789'){
		window.location.assign('acordeones.html');
	}
}

function save(){
	recordatorio = document.getElementById('new').value;
	localStorage.setItem('recordatorio', recordatorio);
	window.location.assign('index.html');
}

function cargarAcordeon(){
	recordatorio = localStorage.getItem('recordatorio');
	document.getElementById('acordeones').innerHTML = recordatorio;
}

function regresar(){
	window.location.assign('index.html');
}
