//-------AUTHORS---------//
// Caitlin Collins
// Luis De La Espriella
// Bennett Batzli
// Andy Fehrenbach

// date created: 1/28/2016

var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var employeeBonus =[];

function stiMachine(character) {
	var bonus = 0;
	var rating = character[3];
	var tenure = character[1].length; //lenth of employee #
	var salary = parseFloat(character[2]); //changing salary string to a #
	var totalComp = 0;
	var empName = character[0];
	var percentBonus = 0;

	switch (rating) {
		case 3:
			percentBonus = .04;
			break; 
		case 4:
			percentBonus = .06;
			break; 
		case 5:
			percentBonus = .1;
			break; 
		default:
			percentBonus = 0;

	}
	
	if (tenure == 4){
		percentBonus +=  .05;
	}
	
	if (salary > 65000){
		percentBonus = percentBonus - .01; //*
	}

	if(percentBonus > .13){
		percentBonus = .13;
	}

bonus = salary * percentBonus;
totalComp = bonus + salary;
percentBonus *= 100;
return [empName, percentBonus + "%", "$" + totalComp, "$" + parseInt(bonus)];
	
}

for (var i = 0; i < employees.length; i++) {
	console.log(stiMachine(employees[i]));
}


