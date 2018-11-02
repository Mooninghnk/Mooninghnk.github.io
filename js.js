var result = 1;
var counter = 0;
var number = Number(prompt("number"))
var pwr = Number(prompt("power"))
while (counter < pwr) {
	result = result * number;
	counter++
}
alert(result);
console.log(result);
