let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string); // Evaluate the expression
                input.value = string;
            } catch (e) {
                input.value = "Error"; // Handle invalid expressions
                string = ""; // Reset the string
            }
        } else if (value === 'AC') {
            string = "";
            input.value = string;
        } else if (value === 'DEL') {
            string = string.slice(0, -1); // Remove last character
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});
