// Exercise 1

// let auto = {
// 	name: "Toyota",
// 	model: "Camry",
// 	year: 2020,
// 	averageSpeed: 70,

// 	info() { console.log(`${this.name} ${this.model} ${this.year} year`) },

// 	distanceTime(param) {
// 		let time = Math.floor(param / this.averageSpeed);
// 		if (time > 4) {
// 			return console.log(`this car will pass distance ${param} in ${time + Math.floor(time / 4)} hour `)
// 		}
// 		if (time < 4) {
// 			return console.log(`this car will pass distance ${param} in ${Math.floor((time * 100) / 60)} hour and ${Math.floor((time * 100) % 60)} minute`)
// 		}
// 	}
// }

// auto.info();
// auto.distanceTime(850)

/*------------------------------*/
// Exercise 2

// Определение объекта Fraction
// function Fraction(numerator, denominator) {
// 	this.numerator = numerator;
// 	this.denominator = denominator;
// }

// Функция сложения двух дробей
// function addFractions(fraction1, fraction2) {
// 	let newNumerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
// 	let newDenominator = fraction1.denominator * fraction2.denominator;
// 	return new Fraction(newNumerator, newDenominator);
// }

// Функция вычитания двух дробей
// function subtractFractions(fraction1, fraction2) {
// 	let newNumerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
// 	let newDenominator = fraction1.denominator * fraction2.denominator;
// 	return new Fraction(newNumerator, newDenominator);
// }

// Функция умножения двух дробей
// function multiplyFractions(fraction1, fraction2) {
// 	let newNumerator = fraction1.numerator * fraction2.numerator;
// 	let newDenominator = fraction1.denominator * fraction2.denominator;
// 	return new Fraction(newNumerator, newDenominator);
// }

// Функция деления двух дробей
// function divideFractions(fraction1, fraction2) {
// 	let newNumerator = fraction1.numerator * fraction2.denominator;
// 	let newDenominator = fraction1.denominator * fraction2.numerator;
// 	return new Fraction(newNumerator, newDenominator);
// }

// Функция сокращения дроби
// function simplifyFraction(fraction) {
// 	let gcd = function (a, b) {
// 		return b ? gcd(b, a % b) : a;
// 	};
// 	let divisor = gcd(fraction.numerator, fraction.denominator);
// 	return new Fraction(fraction.numerator / divisor, fraction.denominator / divisor);
// }

// Создание объектов-дробей
// let fraction1 = new Fraction(3, 4);
// let fraction2 = new Fraction(1, 2);

// Примеры использования функций
// let sum = addFractions(fraction1, fraction2);
// let difference = subtractFractions(fraction1, fraction2);
// let product = multiplyFractions(fraction1, fraction2);
// let quotient = divideFractions(fraction1, fraction2);
// let simplifiedFraction = simplifyFraction(new Fraction(10, 3));

// console.log("Сумма дробей: ", sum);
// console.log("Разность дробей: ", difference);
// console.log("Произведение дробей: ", product);
// console.log("Частное дробей: ", quotient);
// console.log("Сокращенная дробь: ", simplifiedFraction);
