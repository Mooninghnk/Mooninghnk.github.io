var name = prompt("your account email: ")

do {
	var password = prompt("Create a Passowrd ");
	var reenter = prompt("re_enter ");
} while(password != reenter);

alert("Account created for: " + name);