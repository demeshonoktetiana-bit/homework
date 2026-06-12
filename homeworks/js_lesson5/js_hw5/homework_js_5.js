//#I2XsG6f створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectangleArea = (a, b) => a * b;
console.log(rectangleArea(5,10));



//#ETGAxbEn8l – створити функцію, яка обчислює та повертає площу кола з радіусом r

let calcRadius = (r) => Math.PI * r * r;
console.log(calcRadius(5));



//#Mbiz5K4yFe7 – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

let calcCylinderArea = (height, radius) => Math.PI * 2 * radius * (radius + height);
console.log(calcCylinderArea(5, 10));



//#SIdMd0hQ – створити функцію, яка приймає масив та виводить кожен його елемент

let elementsArray = (arr) => {
    for (let number of arr ) {
        console.log(number);
    }
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

elementsArray(numbers);



//#59g0IsA – створити функцію, яка створює параграф з текстом. Текст задати через аргумент


let textArea = (text) => {
   let p = `<p>${text}</p>`;
    document.write(p);

}

textArea('Hello World!');




//#hOL6126 – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const createList = (text) => {
    document.write(`
                    <ul>
                      <li>${text}</li>
                      <li>${text}</li>
                      <li>${text}</li>
                    </ul>
                   `)
}
createList('Hello Okten');


//#0Kxco1edSN – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл).

let createList1 = (text, counter) => {
    document.write(`<ul>`)
        for (let i = 0 ; i < counter; i++) {
        document.write(`<li>${text}</li>`);
        }
    document.write(`</ul>`)
}
createList1('Hello Okten', 3);


//#gEFoxMMO - створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createElementsArray = (array) => {
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
}
createElementsArray([123, true, 234, false, 'hello', 'world' ]);


//#bovDJDTIjt – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

let createObjectArray = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
createObjectArray([
    {id:1 , name:"John", age:29},
    {id:2 , name:"Anna", age:25},
    {id:3 , name:"Max", age:24},
    {id:4 , name:"Julia", age:21},
    {id:5 , name:"Oleksandr", age:31},
]);



// #pghbnSB – створити функцію, яка повертає найменше число з масиву

let minValueArray = (numbers) => {
    let minValue = numbers[0];

    for (let number of numbers) {
        if (number < minValue) {
            minValue = number;
        }
    }
 return minValue;
}

console.log (minValueArray([-1, 2, 3, 4, 5, 22, 45, 65, -127]));




//#EKRNVPM – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sumArray = (arr) => {
    let sumValue = 0;
    for (let item of arr) {
        sumValue = sumValue + item;
    }
    return sumValue;
}

console.log(sumArray([1, 2, 10]));


//#kpsbSQCt2Lf – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах

let swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log(swap([11,22,33,44],0,1));



//#mkGDenYnNjn
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250



let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let item of currencyValues) {
        if (exchangeCurrency === item.currency) {
            sumUAH = sumUAH / item.value;
            return sumUAH;

        }
    }
}
console.log(exchange(10000,[{currency: 'USD', value: 40} , {currency: 'EUR' , value: 42}], 'USD'));
