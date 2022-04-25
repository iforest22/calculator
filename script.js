let num1 = ''
let num2 = ''
let operator = ''
let numberEntered = ''

function operate(operator, num1, num2) {
    if (operator === '+') { return Number(num1) + Number(num2) }
    if (operator === '-') { return Number(num1) - Number(num2) }
    if (operator === '*') { return Number(num1) * Number(num2) }
    if (operator === '/') { return Number(num1) / Number(num2) }
}


const numberButtons = document.querySelectorAll('.numberButton')

numberButtons.forEach((numberButton) => numberButton.addEventListener('click', () => {
    numberEntered = numberButton.textContent;
    num2 += ('' + numberEntered);
    document.querySelector('.display').textContent = `${num2}`

    console.log(`operator: ${operator}`, `num1: ${num1}`, `num2: ${num2}`)

}))


const operatorButtons = document.querySelectorAll('.operatorButton')

operatorButtons.forEach((operatorButton) => operatorButton.addEventListener('click', () => {

    if (operatorButton.textContent === '=') {
        num2 = operate(operator, num1, num2);
        document.querySelector('.display').textContent = `${num2}`
        operator = ''
    }

    else if (operator === '') {
        operator = `${operatorButton.textContent}`
        num1 = num2
        num2 = ''
        document.querySelector('.display').textContent = `${num1}`
    }

    else {
        num2 = operate(operator, num1, num2)
        operator = operatorButton.textContent
        num1 = num2
        num2 = ''
        document.querySelector('.display').textContent = `${num1}`
    }

    if (num2 === Infinity || num2 === undefined) {clearAll()}

    console.log(`operator: ${operator}`, `num1: ${num1}`, `num2: ${num2}`)
}))

function clearAll() {
    num1 = ''
    num2 = ''
    operator = ''
    document.querySelector('.display').textContent = ``
}

document.querySelector('.clear').addEventListener('click', clearAll)
