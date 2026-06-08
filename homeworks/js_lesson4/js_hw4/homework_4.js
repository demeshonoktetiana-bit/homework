//#I2XsG6f – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б

function square (aNum, bNum) {
   const result = aNum * bNum;
  console.log(result);
  return result;
}
square(5, 10);

//– створити функцію, яка обчислює та повертає площу кола з радіусом r

function roundSquare (radius) {
    let result = Math.PI * radius * radius;
    console.log(result);
    return result;
}
roundSquare(5);


//#Mbiz5K4yFe7 – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function squareCilinder (radius, height) {
    return 2 * Math.PI * radius * height;

}
console.log(squareCilinder(5, 10));


//#SIdMd0hQ– створити функцію, яка приймає масив та виводить кожен його елемент

function foobar (array) {
    for (const item of array) {
        console.log(item);
    }
}
let numbers = [1, 2, 3, 4, 5];
foobar(numbers);



//#59g0IsA – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function foobar2 (text) {
    let p = (`<p>${text}</p>`);
    document.write(p);
}

foobar2('Hello');



//#hOL6126 – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

// function foobar3 (text) {
//     let ul = (`<ul>
//                        <li>${text}</li>
//                        <li>${text}</li>
//                        <li>${text}</li>
//                      </ul>
//                    `)
//     document.write(ul);
// }
//
// foobar3 ('Okten');
//


//#0Kxco1edSN – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function foobar4 (text, counter) {
     document.write(`<ul>`)
    for (let i = 0 ; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
foobar4('Hello Okten', 3);




//#gEFoxMMO – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write


function foobar5 (arrayOfPrimitives) {
    document.write(`<ul>`)
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}
foobar5(['a', 'b', 'c', true, false, 12, 13]);


//#bovDJDTIjt – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.


function foobar6 (users) {
    for (const user of users) {
        document.write(`<div>${user.id}, ${user.name}, ${user.age}</div>`);

    }
}

foobar6([
    {id: 1, name: 'John', age: 15},
    {id: 2, name: 'David', age: 20},
    {id: 3, name: 'Anna', age: 24},
])




//#pghbnSB – створити функцію яка повертає найменьше число з масиву

function minValue (numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
 return min;
}

console.log(minValue([12, 55, 16, -3, 44, 88]));



//#EKRNVPM  – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum (arr) {
      let basket = 0;
      for (const item of arr) {
          basket = basket + item;
      }
return basket;
}

console.log(sum([13, 45, 23]));


//#kpsbSQCt2Lf – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах

function swap (arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log(swap([11,22,33,44],0,1));


//#mkGDenYnNjn.html  Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchenge (sumUAH, currencyValues, exchengeCurrency) {

    for (const item of currencyValues) {
        if (item.currency === exchengeCurrency) {
            sumUAH = sumUAH / item.value;
            return sumUAH;
        }
    }
}

console.log(exchenge(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));