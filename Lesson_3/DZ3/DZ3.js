/*---------------------------------------*/
// Exercise 1

// function degree(arg1, arg2) {
// 	if (arg2 == 1) return arg1
// 	else return arg1 * degree(arg1, (arg2 - 1))
// }

// let number1 = +prompt('Введите число')
// let number2 = +prompt(`Введите на какую степень хотите вознести число ${number1}`)

// alert(`число ${number1} в ${number2} степени это: ` + degree(number1, number2))

/*---------------------------------------*/
// Exercise 2
// function NOD(p1, p2) {
// 	const c = p2
// 	function NOD1(p1, p2) {
// 		if ((p1 % p2 == 0) && (c % p2 == 0)) return p2
// 		else return NOD1(p1, (p2 - 1))
// 	}
// 	alert(NOD1(p1, p2))
// }

// let num1 = +prompt('type first number')
// let num2 = +prompt('type second number')

// NOD(num1, num2)

/*---------------------------------------*/
// Exercise 3
// function bigDigitOfNumber(arg) {
// 	if (arg === 0) return;
// 	b.unshift(arg % 10);
// 	bigDigitOfNumber(Math.floor(arg / 10));
// }

// let num = +prompt('type number');
// let b = [];
// bigDigitOfNumber(num);
// alert(`Big digit of number ${num} is ${Math.max.apply(null, b)}`)















