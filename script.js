const calcInput = document.querySelector('.input');
const allButtons = document.querySelectorAll('.button');
const clearButton = document.querySelector('.clear');

// Input for every button
allButtons.forEach((button) => {
    button.addEventListener("click", (val) => {
        const value = val.target.dataset.value;

        // Commence operate function when '=' operator is pressed
        if (value === '=') {
            if (calcInput.textContent.includes('/')) {
                const split = calcInput.textContent.split('/')
                operate('/', split[0], split[1]);
            }
            if (calcInput.textContent.includes('*')) {
                const split = calcInput.textContent.split('*')
                operate('*', split[0], split[1]);
            }
            if (calcInput.textContent.includes('-')) {
                const split = calcInput.textContent.split('-')
                operate('-', split[0], split[1]);
            }
            if (calcInput.textContent.includes('+')) {
                const split = calcInput.textContent.split('+')
                operate('+', split[0], split[1]);
            }
        }
        
        // Clear button
        if (value === "clear") {
        calcInput.textContent = '';
        } else {
        calcInput.textContent += value;

        // To remove '=' operator when the answer is shown
        calcInput.textContent = calcInput.textContent.replace('=', '');
        }
    });
});

// Operate function 
function operate(operator, value1, value2) {
    console.log(operator, value1, value2);
    const num1 = Number(value1);
    const num2 = Number(value2);

    if (operator === '/') {
        calcInput.textContent = num1 / num2;
    }
    if (operator === '*') {
        calcInput.textContent = num1 * num2;
    }
    if (operator === '-') {
        calcInput.textContent = num1 - num2;
    }
    if (operator === '+') {
        calcInput.textContent = num1 + num2;
    }

}

