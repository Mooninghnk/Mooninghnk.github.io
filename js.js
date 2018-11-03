var balance = 0;
var company = 500;
var deposit = 0;


var name = prompt("your account email: ")

do {
	var password = prompt("Create a Passowrd ");
	var reenter = prompt("re_enter ");
} while(password != reenter);

alert("Account created for: " + name);

var choise = Number(prompt("pick an option: FOR DEPOSITS = 1: FOR TRANSFERS = 2: FOR BALANCE = 3 " ));
if (choise === 3)
	alert("Your balance is $2M.... just kidding: balance = "+ balance);
else if (choise === 1)
	alert("Your Working account has $" + company)
	do {
		var deposit = prompt("how much would you like to deposit from working account? ")
	} while(deposit > company)
	balance = balance + deposit;
	alert("your balance now is "+ balance +"$");




