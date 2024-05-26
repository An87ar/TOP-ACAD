/*---------------------------------------*/
// Exercise 1

// function comparison(a, b) {
// 	if (a > b) { alert('1') }
// 	else if (a < b) { alert('-1') }
// 	else alert(0)
// }

// let a = Number(prompt('first number'))
// let b = Number(prompt('second number'))

// comparison(a, b)

/*---------------------------------------*/
// Exercise 2

// function factorial(a) {
// 	let result = 1;
// 	for (let i = 1; i <= a; i++) {
// 		result = result * i;
// 	}
// 	return result;
// }

// let num = Number(prompt('Type number from 1 to 10'))
// alert(factorial(num))

/*---------------------------------------*/
// Exercise 3

// function transformation(num1, num2, num3) {
// 	let result = num1 + num2 + num3
// 	return result
// }

// let a = String(prompt('Type first digit'))
// let b = String(prompt('Type second digit'))
// let c = String(prompt('Type fthird digit'))

// alert(transformation(a, b, c))

/*---------------------------------------*/
// Exercise 4

// function area(a, b) {
// 	let result = a * b;
// 	if (!a || a == 0) {
// 		a = b;
// 		result = a ** 2
// 	}
// 	else if (!b || b == 0) {
// 		b = a;
// 		result = b ** 2
// 	}
// 	return result
// }

// let num1 = +prompt("Type first number")
// let num2 = +prompt("Type second number")

// alert(area(num1, num2))

/*---------------------------------------*/
// Exercise 5

function perfectNumber(num) {
	let result = 0;
	for (let i = 1; i < num; i++) {
		if (num % i == 0) {
			result += i;
		} else continue;
	}
	if (result === num) {
		return result;
	}
}

// let num = +prompt('Type number to now perfect or not')
// if (!perfectNumber(num)) { alert('Number is not perfect') }
// else alert('Number is perfect')

/*---------------------------------------*/
// Exercise 6

// let arr = '';

// function perfectNumbers(num1, num2) {
// 	for (let i = num1; i <= num2; i++) {
// 		if (perfectNumber(i)) {
// 			arr += `${i} `;
// 		}
// 	}
// }

// let min = +prompt('Enter min Number');
// let max = +prompt('Enter max Number');

// perfectNumbers(min, max)

// if (arr) {
// 	alert('perfect numbers in massive is: ' + arr)
// } else alert('There is not perfect numbers.')

/*---------------------------------------*/
// Exercise 7

// function time(hour, minute, second) {
// 	if (!minute && !second) {
// 		minute = '00';
// 		second = '00';
// 	}
// 	else if ((minute > 0 && minute < 10)
// 		&& (second > 0 && second < 10)) {
// 		minute = '0' + minute;
// 		second = '0' + second
// 	}
// 	else if (minute > 0 && minute < 10) { minute = '0' + minute }
// 	else if (second > 0 && second < 10) { second = '0' + second }
// 	alert(`Вы ввели время: "${hour} : ${minute} : ${second}"`)
// }

// let hour = +prompt('Введите час (от 0 до 24)')
// let minute = +prompt('Введите минуту')
// let second = +prompt('Введите секунду')

// time(hour, minute, second)

/*---------------------------------------*/
// Exercise 8

function timeToSecond(hour, minute, second) {
	if (!minute || !second || !hour) { alert('Введенное значение не корректно.') }
	let result = hour * 3600 + minute * 60 + second
	return result;
}

// let hour = +prompt('Введите час (от 0 до 24)')
// let minute = +prompt('Введите минуту')
// let second = +prompt('Введите секунду')
// alert(`Вы ввели время: "${hour} : ${minute} : ${second}" - это ${timeToSecond(hour, minute, second)} секунд`)


/*---------------------------------------*/
// Exercise 9

function secondToTime(digit) {
	let hour = 0;
	let minute = 0;
	let second = 0;
	if (digit >= 3600) { hour = Math.floor(digit / 3600); } else hour = 0;
	if (digit >= 60) { minute = Math.floor((digit - hour * 3600) / 60); } else minute = 0;
	if (digit < 60) { second = digit; } else second = digit - hour * 3600 - minute * 60;

	return `${hour} (чч) : ${minute} (мм): ${second} (сек.)`
}

// let digit = +prompt('Введите число в секундах')

// alert(secondToTime(digit))

/*---------------------------------------*/
// Exercise 10

let hour1 = +prompt('Введите начальное время: час (от 0 до 24)')
let minute1 = +prompt('Введите минуту')
let second1 = +prompt('Введите секунду')
let hour2 = +prompt('Введите конечное время: час (от 0 до 24)')
let minute2 = +prompt('Введите минуту')
let second2 = +prompt('Введите секунду')

let digitInSecond1 = timeToSecond(hour1, minute1, second1);
let digitInSecond2 = timeToSecond(hour2, minute2, second2);

let result = digitInSecond2 - digitInSecond1;

alert('Разница между временными отрезками: ' + secondToTime(result))















