const numberList = document.querySelector('div.container');
let element;

for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        element = "FizzBuzz";
    } else if (i % 3 === 0) {
        element = "Fizz";
    } else if (i % 5 === 0) {
        element = "Buzz";
    } else {
        element = i;
    }

    output = document.createElement('p');
    output.append("Riga " + i + " - " + element);
    numberList.append(output);
}