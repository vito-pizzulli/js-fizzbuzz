const numberList = document.querySelector('main');

for (let i = 1; i <= 100; i++) {
    console.log(i);
    const number = document.createElement('p');
    number.append(i);
    numberList.append(number);
}