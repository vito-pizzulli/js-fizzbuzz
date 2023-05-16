const numberList = document.querySelector('div.container');
let element;
let output;

for (let i = 1; i <= 100; i++) {
    output = document.createElement('p');
    output.classList.add('goldenrod');

    if ((i % 3 === 0) && (i % 5 === 0)) {
        element = "FizzBuzz";
        output.classList = " ";
        output.classList.add('red');
    } else if (i % 3 === 0) {
        element = "Fizz";
        output.classList = " ";
        output.classList.add('blue');
    } else if (i % 5 === 0) {
        element = "Buzz";
        output.classList = " ";
        output.classList.add('green');
    } else {
        element = i;
    }

    output.append("Line " + i + " - " + element);
    numberList.append(output);
}