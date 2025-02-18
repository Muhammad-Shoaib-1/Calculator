let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let historyList = document.getElementById('history');
let themeToggle = document.querySelector('.theme-toggle');

let string = "";
let history = [];
let isDark = false;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                let result = eval(string);
                // history.push(`${string} = ${result}`);
                // updateHistory();
                string = result.toString();
                input.value = string;
            } catch (e) {
                input.value = "Error";
                string = "";
            }
        } else if (value === 'AC') {
            string = "";
            input.value = string;
        } else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else if (value === '√') {
            string = Math.sqrt(parseFloat(string)).toString();
            input.value = string;
        } else if (value === '^') {
            string += '**';
            input.value = string;
        } else if (value === 'π') {
            string += Math.PI.toFixed(6);
            input.value = string;
        } else if (value === 'e') {
            string += Math.E.toFixed(6);
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});

function updateHistory() {
    historyList.innerHTML = "";
    history.slice(-5).forEach(entry => {
        let li = document.createElement('li');
        li.innerText = entry;
        historyList.appendChild(li);
    });
}

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    isDark = !isDark;
    themeToggle.innerHTML = isDark ? '☀️' : '🌙';
});
