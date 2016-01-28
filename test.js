var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var employeeBonus =[];

function stiMachine(xArray) {
	var bonus = 0;
	var rating = xArray[3];
	var tenure = xArray[1].length; //lenth of employee #
	var salary = parseFloat(xArray[2]); //changing salary string to a #
	var totalComp = 0;
	var empName = xArray[0];
	var percentBonus = 0;

	function calcSti(){
		if (rating <= 2){
			percentBonus = 0;
		} else if (rating == 3){
			percentBonus = .04;
		} else if (rating == 4) {
			percentBonus = .06;
		} else {
			percentBonus = .1;
		}
		return percentBonus;
	}
	calcSti();
	function checkBonus (){
		if (tenure == 4){
			percentBonus +=  .05;
		}
		return percentBonus;
	}
	checkBonus();
	function decreaseBonus(){
		if (salary > 65000){
			percentBonus = percentBonus - .01; //*
		}
		return percentBonus;
	}
	decreaseBonus();
	function overwriteBonus () {
		if(percentBonus > .13){
			percentBonus = .13;
		}
		return percentBonus;
	}
	overwriteBonus();

	bonus = salary * percentBonus;
	totalComp = bonus + salary;
	percentBonus *= 100;
	return [empName, percentBonus + "%", "$" + totalComp, "$" + parseInt(bonus)];
	
}

for (var i = 0; i < employees.length; i++) {
	console.log(stiMachine(employees[i]));
}