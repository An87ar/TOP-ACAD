// Exercise 1
// let num1 = Number(prompt("Введите первое число", ''))
// let num2 = Number(prompt("Введите второе число", ''))
// let sum = Number(0)

// for (let i = num1; i <= num2; i++) { sum += i; }
// alert('Сумма всех чисел входящий в интервал: ' + sum)

/*----------------------------------------------------*/
// Exercise 2
// let num1 = Number(prompt("Введите первое число", ''))
// let num2 = Number(prompt("Введите второе число", ''))
// let num3 = 0

// for (let i = 1; i <= num1; i++) {
// 	if ((num1 % i == 0) && (num2 % i == 0))
// 		num3 = i
// }

// if (num3 > 1)
// 	alert('наибольший общий делитель равен: ' + num3)
// else
// 	alert(`Числа ${num1} и ${num2} являются взаимно простыми, так как их наибольший общий делитель — ` + num3)

/*---------------------------------------------------*/
// Exercise 3
// let num = Number(prompt("Введите число"))
// for (let i = 1; i <= num; i++) {
// 	if (num % i == 0)
// 		alert(`Все делители числа ${num}: ` + i)
// }

/*---------------------------------------------------*/
// Exercise 4
// let num = Number(prompt("Введите число"))
// let sum = 0

// while (true) {
// 	if (Math.floor(num) != 0) {
// 		num = num / 10;
// 		sum++;
// 		if (Math.floor(num) == 0) break;
// 	}
// }
// alert(`В введенном числе ${num} количество цифр: ` + sum)

/*---------------------------------------------------*/
// Exercise 5
// let positive = 0
// let negative = 0
// let zero = 0
// let even = 0
// let odd = 0

// for (let i = 1; i <= 10; i++) {
// 	let value = +prompt(`Введите число № ${i}`);
// 	if (!value) break;
// 	else if ((value > 0) && ((value % 2 == 0))) { positive++; even++ }
// 	else if ((value > 0) && ((value % 2 != 0))) { positive++; odd++ }
// 	else if ((value < 0) && ((value % 2 == 0))) { negative++; even++ }
// 	else if ((value < 0) && ((value % 2 != 0))) { negative++; odd++ }
// 	else { zero++ }
// }

// if (zero == 0)
// 	alert(`Вы ввели: положительных - ${positive}, отрицательных - ${negative}, четных - ${even}, нечетных - ${odd} и без нулей.`)
// else
// 	alert(`Вы ввели: положительных - ${positive}, отрицательных - ${negative}, четных - ${even}, нечетных - ${odd} и нулей - ${zero}.`)

/*---------------------------------------------------*/
// Exercise 6
// let sum = 0

// Calculator:
// while (true) {
// 	let value1 = Number(prompt('введите число'))
// 	if (!value1) break;
// 	let value2 = Number(prompt('введите второе число'))
// 	if (!value2) break;
// 	let value3 = prompt('какое решение вы хотите сделать?')
// 	if (!value3) break;
// 	else if (value3 == '+') {
// 		sum = value1 + value2;
// 		alert(`Ответ: ${sum}`)
// 		let answer = prompt('Хотите повторить? Напишите: да / нет')
// 		if ((answer == 'нет') || !answer) break Calculator
// 	}
// 	else if (value3 == '-') {
// 		sum = value1 - value2;
// 		alert(`Ответ: ${sum}`)
// 		let answer = prompt('Хотите повторить? Напишите: да / нет')
// 		if ((answer == 'нет') || !answer) break Calculator
// 	}
// 	else if (value3 == '*') {
// 		sum = value1 * value2;
// 		alert(`Ответ: ${sum}`)
// 		let answer = prompt('Хотите повторить? Напишите: да / нет')
// 		if ((answer == 'нет') || !answer) break Calculator
// 	}
// 	else if (value3 == '/') {
// 		sum = value1 / value2;
// 		alert(`Ответ: ${sum}`)
// 		let answer = prompt('Хотите повторить? Напишите: да / нет')
// 		if ((answer == 'нет') || !answer) break Calculator
// 	}
// }

/*---------------------------------------------------*/
// Exercise 7










