
// Exercise 1
// let age = prompt('Сколько вам лет?')

// if (age < 0)
// 	alert('Не корректное значение. Введите положительное число!')
// else if (age >= 0 && age <= 2)
// 	alert('вы являетесь малышем!')
// else if (age > 2 && age < 12)
// 	alert('вы являетесь ребенком!')
// else if (age >= 12 && age <= 18)
// 	alert('вы являетесь подростком!')
// else if (age > 18 && age < 60)
// 	alert('вы являетесь взрослым!')
// else
// 	alert('вы являетесь пенсионером!')

/*------------------------------------------------------------*/
// Exercise 2
// let num = Number(prompt('Введите число от 0 до 9'))
// switch (num) {
// 	case 0:
// 		alert(')');
// 		break;
// 	case 1:
// 		alert('!');
// 		break;
// 	case 2: alert('@');
// 		break;
// 	case 3: alert('#');
// 		break;
// 	case 4: alert('$');
// 		break;
// 	case 5: alert('%');
// 		break;
// 	case 6: alert('^');
// 		break;
// 	case 7: alert('&');
// 		break;
// 	case 8: alert('*');
// 		break;
// 	case 9: alert('(');
// 		break;
// 	default: alert('Вы ввели некорректное число!')
// }

/*------------------------------------------------------------*/
// Exercise 3
// let num = Number(prompt('Введите трехзначное число'))
// let num1 = Math.floor(num / 100)
// let num2 = Math.floor((num % 100) / 10)
// let num3 = num % 10

// if (num < 100 || num > 999)
// 	alert('Вы ввели некорректное число!!!')
// else if (num1 == num2 && num2 == num3)
// 	alert('Все чилса одинаковые')
// else if (num1 == num2 && num2 != num3)
// 	alert('Первое и второе число одинаковые')
// else if (num1 != num2 && num1 == num3)
// 	alert('Первое и тре число одинаковые')
// else if (num1 != num2 && num2 == num3)
// 	alert('второе и тре число одинаковые')
// else
// 	alert('Все числа разные!')

/*------------------------------------------------------------*/
// Exercise 4
// let year = prompt('Введите год')
// let message = (((year % 400 == 0) || (year % 4 == 0)) && (year % 100 != 0)) ? 'Високосный год' : 'Обычный год';
// alert(message)

/*------------------------------------------------------------*/
// Exercise 5
// let num = prompt('Введите год')
// let num1 = Math.floor(num / 10000)
// let num2 = Math.floor((num % 10000) / 1000)
// let num3 = Math.floor((num % 100) / 10)
// let num4 = num % 10

// if (num < 10000 || num > 99999)
// 	alert('Ввели некорректное число!')
// else if (num1 == num4 && num2 == num3)
// 	alert('Число является палиндромом.')
// else
// 	alert('Число не является палиндромом.')

/*------------------------------------------------------------*/
// Exercise 6
// let money = Number(prompt('сколько у вас денег?'))
// let exchange = prompt('На какую валюту пересчитать: USD, UAN, AZN?')
// let usd = money / 90.99
// let uan = money / 12.58
// let azn = money / 53.52

// switch (exchange) {
// 	case 'USD': alert(`${usd.toFixed(2)} USD`);
// 		break;
// 	case 'UAN': alert(`${uan.toFixed(2)} UAN`);
// 		break;
// 	case 'AZN': alert(`${azn.toFixed(2)} AZNa`);
// 		break;
// 	default:
// 		alert('Вы ввели неправильные данные!')
// }

/*------------------------------------------------------------*/
// Exercise 7
// let money = prompt('Сумма покупки')
// let sum1 = money - money * 0.03;
// let sum2 = money - money * 0.05;
// let sum3 = money - money * 0.07;

// if (money < 200)
// 	alert('Сумма меньше 200')
// else if (money >= 200 && money < 300)
// 	alert(`Итого к оплате ${sum1}`)
// else if (money >= 300 && money < 500)
// 	alert(`Итого к оплате ${sum2}`)
// else if (money >= 500)
// 	alert(`Итого к оплате ${sum3}`)
// else
// 	alert('не правилное значение!')

/*------------------------------------------------------------*/
// Exercise 8
// const pi = 3.14
// let length = prompt('Укажите длинну окружности')
// let perimeter = prompt('Укажите периметр квадрата')
// let diametr = length / pi
// let squareLength = perimeter / 4
// let message = (diametr <= squareLength) ? 'Окружность помещается в квадрат' : 'Окружность в квадрат не помещается';
// alert(message)

/*------------------------------------------------------------*/
// Exercise 9
















