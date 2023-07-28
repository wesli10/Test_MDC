
// EXERCISE 1 

function calcularEx1() {
  const num1 = parseFloat(document.getElementById('ex1-num1').value);
  const num2 = parseFloat(document.getElementById('ex1-num2').value);
  const operator = document.getElementById('ex1-op').value;

  if (operator === '+') {
    alert(`Resultado: ${num1 + num2}`);
  } else if (operator === '-') {
    alert(`Resultado: ${num1 - num2}`);
  } else if (operator === '*') {
    alert(`Resultado: ${num1 * num2}`);
  } else if (operator === '/') {
    if (num2 === 0) {
      alert('Cannot divide by 0')
    }
    alert(`Resultado: ${num1 / num2}`);
  }
  else {
    alert('Invalid operator');
  }
}

// EXERCISE 2

function CheckisPrime(num) {
  if (num <= 1) {
    return false;
  } else if (num <= 3) {
    return true;
  } else if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

function showPrime() {
  const num = parseInt(document.getElementById('ex2-num').value);
  const isPrime = CheckisPrime(num)

  if (isPrime) {
    alert(`${num} is a prime number`);
  } else {
    alert(`${num} is not a prime number`);
  }
}

function printFirstNPrimes() {
  let count = 10;
  const primes = [];
  let currentNumber = parseInt(document.getElementById('ex2-num').value);

  while (primes.length < count) {
    if (CheckisPrime(currentNumber)) {
      primes.push(currentNumber);
    }
    currentNumber++;
  }
  alert(primes)
}

// EXERCISE 3

function CheckFactorial(number) {
  if (number < 0) {
    return "The factorial is not defined for negative numbers.";
  } else if (number === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }
}
function showFactorial() {
  const number = parseInt(document.getElementById('ex3-num').value);
  const result = CheckFactorial(number);
  alert(result);
}

// EXERCISE 4

function isPalindrome(string) {

  string = string.replace(/\s/g, '').toLowerCase();

  const reversedString = string.split('').reverse().join('');

  return string === reversedString;

}

function showPalindrome() {
  const str = document.getElementById('ex4-str').value;


  if (isPalindrome(str)) {
    alert(`${str} is a palindrome`);
  } else {
    alert(`${str} is not a palindrome`);
  }

}

// EXERCISE 5

function showTable(num) {
  let tableHTML = `<h2>Table of ${num}</h2><ul>`;
  for (let i = 1; i <= 10; i++) {
    const result = num * i;
    tableHTML += `<li>${num} x ${i} = ${result}</li>`;
  }
  tableHTML += `</ul>`;

  document.getElementById('ex5-table').innerHTML = tableHTML;

}

function getNumberFromUser() {
  const num = parseInt(document.getElementById('ex5-num').value);

  showTable(num);
}

// EXERCISE 6

function countVowels(string) {

  const vowelRegex = /[aeiou]/gi;
  const vowels = string.match(vowelRegex);
  return vowels ? vowels.length : 0;

}

function processSentence() {
  const sentence = document.getElementById('ex6-string').value;
  if (sentence === null || sentence.trim() === '') {
    alert('Please enter a valid sentence');
  } else {
    const vowelCount = countVowels(sentence);
    alert(`${sentence} has ${vowelCount} vowel(s)`);
  }
}

// EXERCISE 7

function calcAverage(grade1, grade2, grade3) {
  const sum = grade1 + grade2 + grade3;
  const average = sum / 3;
  return average.toFixed(2);
}

function showAverage() {
  const grade1 = parseFloat(document.getElementById('ex7-grade1').value);
  const grade2 = parseFloat(document.getElementById('ex7-grade2').value);
  const grade3 = parseFloat(document.getElementById('ex7-grade3').value);

  if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
    alert('Please enter a valid grade number');
  } else {
    const average = calcAverage(grade1, grade2, grade3);
    alert(`The average of Grades is ${average}`);
  }
}

// EXERCISE 8

function calcFinalValue(initialCapital, interestRate, investTime) {
  const taxDecimal = interestRate / 100
  const finalValue = initialCapital * (1 + taxDecimal) ** investTime;
  return finalValue.toFixed(2);
}

function processCalc() {
  const initialCapital = parseFloat(document.getElementById('ex8-initialCapital').value);
  const interestRate = parseFloat(document.getElementById('ex8-interestRate').value);
  const investTime = parseFloat(document.getElementById('ex8-investTime').value);

  if (isNaN(initialCapital) || isNaN(interestRate) || isNaN(investTime)) {
    alert('Please enter valid values.')
  } else {
    const finalValue = calcFinalValue(initialCapital, interestRate, investTime);
    alert(`The final value is ${finalValue}`);
  }
}




