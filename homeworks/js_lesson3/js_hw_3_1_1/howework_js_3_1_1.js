//#yHAwJOyiC

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i =0; i<arr.length; i++) {
    console.log(arr[i]);
}


//#GamKju89ob

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

for (let i =0; i< letters.length; i++) {
    console.log(letters[i]);
}


//#Bm76xmg

let elements = [true, false, 12, 13, 14, 'a', 'b', 'c', 'd', 'e'];
for (let i =0; i<elements.length; i++) {
    console.log(elements[i]);
}


//#u3vmD0YJXh

// let elementsArray = ['a', 'b', 'c', 'd', true, 1, 2, 3, false, 4];
//
// for (let i =0; i<elementsArray.length; i++) {
//     if (typeof elementsArray[i] === "boolean") {
//
//         console.log(elementsArray[i]);
//
//     }
// }


//#9stMq2ou

let elementsArray1 = [true, false, 11, 22, 33, 'a', 'b', 'c', 'd', 'e'];

   for (let i =0; i<elementsArray1.length; i++) {
       if (typeof elementsArray1[i] === "number") {
           console.log(elementsArray1[i]);
       }
   }



   //#mK4pmM4

let elementsArray2 = ['Tetiana', 'Oleksandr', 'Anna', 26, 32, 28, 'Oleg', 'Vlad', true, false];
   for (let i =0; i<elementsArray2.length; i++) {
       if (typeof elementsArray2[i] === "string") {
           console.log(elementsArray2[i]);
       }
   }


   //#0pm3EyTKy9

let elemntsArray3 = [true, 12, 34, false , 56, 'a', 'b', 78, 'c', 'd'];

   console.log(elemntsArray3[0]);
   console.log(elemntsArray3[1]);
   console.log(elemntsArray3[2]);
   console.log(elemntsArray3[3]);
   console.log(elemntsArray3[4]);
   console.log(elemntsArray3[5]);
   console.log(elemntsArray3[6]);
   console.log(elemntsArray3[7]);
   console.log(elemntsArray3[8]);
   console.log(elemntsArray3[9]);




   //#mDMWMW5a


// for (let i =0; i<10; i++) {
//
//     console.log(`${i}`);
//     document.write(`${i}`);
// }



   //#4sXhaa5YMM

// for (let i=0 ; i < 100; i++) {
//
//     console.log(`${i}`);
//     document.write(`${i}`);
// }



  //#s24slNyz7

// for (let i=0; i < 100; i = i + 2) {
//
//     console.log(`${i}`);
//     document.write(`${i}`);
// }
//
//

   //#zananT5FR1

//– Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i=0; i < 100; i++) {
//
//     if (i % 2 ===0) {
//         console.log(i);
//         document.write(i);
//     }
// }


   //#Tfrwls7FM

// for (let i=0; i < 100; i++) {
//     if (i % 2 !==0) {
//         console.log(i);
//         document.write(i);
//     }
// }


  //#reLkOkTB29Q

//– знайти найбільшу книжку.
//
// – знайти книжку/ки з найбільшою кількістю жанрів
//
// – знайти книжку/ки з найдовшою назвою
//
// – знайти книжку/ки, які писали 2 автори
//
// – знайти книжку/ки, які писав 1 автор

// let booksArray = [
//     {title: "Harry Potter", pages: 320 , author: ["A"] , genre: ["Fantasy"]},
//     {title: "Lord of the Rings", pages: 400, author: ["B"] , genre: ["Epic"]},
//     {title: "The Witcher", pages: 480, author: ["C" , "D"] , genre: ["Fantasy", "Epic"]},
//
// ]
//
// let maxPagesBook = booksArray[0];
//
// for (let i=0; i<booksArray.length; i++) {
//     if (booksArray[i].pages > maxPagesBook.pages  ) {
//         maxPagesBook = booksArray[i];
//
//     }
// }
// console.log(maxPagesBook);
//
//
//
//
// let maxGenreBook = booksArray[0];
//
// for (let i=0 ; i < booksArray.length; i++) {
//
//     if (booksArray[i].genre > maxGenreBook.genre) {
//         maxGenreBook = booksArray[i];
//     }
// }
//
// console.log(maxGenreBook);
//
//
//
// let maxTitleBook = booksArray[0];
//
// for (let i = 0; i < booksArray.length; i++) {
//     if (booksArray[i].title.length > maxTitleBook.title.length) {
//         maxTitleBook = booksArray[i];
//     }
// }
// console.log(maxTitleBook);
//
//
// let maxAuthorBook = booksArray[0];
//
// for (let i = 0; i < booksArray.length; i++) {
//     if (booksArray[i].author > maxAuthorBook.author) {
//         maxAuthorBook = booksArray[i];
//     }
// }
// console.log(maxAuthorBook);
//
//
//
//
//
// for (let i = 0; i < booksArray.length; i++) {
//     if (booksArray[i].author.length === 1) {
//         console.log(booksArray[i]);
//
//     }
// }
//
//




//1. Створити пустий масив та :

//a)

let emptyArray = [];

for (let i=1; i <= 100; i++) {

    if (i % 2 ===0) {
        emptyArray.push(i);
    }
}
console.log(emptyArray);


//b)

let emptyArray1 = [];

for (let i=1; i <= 100; i++) {
    if (i % 2 !==0) {
        emptyArray1.push(i);
    }
}
console.log(emptyArray1);


//c) Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)

let randomArray = [];

for (let i=0; i < 20; i++) {
  randomArray.push(Math.random() *100);

}
console.log(randomArray);




//d)Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)

let randomArray1 = [];

for (let i=0; i < 20 ; i++) {
    randomArray1.push(Math.random()* 725+8);
}


// 2. Вивести за допомогою console.log кожен третій елемент

for (let i = 2; i < randomArray1.length; i= i+3) {
    console.log(randomArray1[i]);

}


//3.Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.

for (let i = 2; i < randomArray1 ; i= i+3) {
    if (randomArray1[i] % 2 === 0) {
        console.log(randomArray1[i]);
    }
}


//4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив

let randomArray2 = [];

for (let i = 2; i < randomArray1.length; i= i+3) {
    if (randomArray1[i] % 2 === 0) {
        console.log(randomArray1[i]);
        randomArray2.push(randomArray1[i]);
    }
}


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let randomArray3 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i =0; i<randomArray3.length; i++) {
    if (randomArray3[i+1] % 2 === 0) {
        console.log(randomArray3[i]);
    }
}



//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let numbersArray = [100,250,50,168,120,345,188];

let result = 0;

for (let item of numbersArray) {
    result = result + item;
}

console.log(result);
let finish = result / numbersArray.length;
console.log(finish);









//7. 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let randomNumbersArray  = [1, 2, 3, 4, 5];
let newArray = [];

for (let i =0; i < randomNumbersArray.length; i++) {
    newArray.push(randomNumbersArray[i] * 5);


}
console.log(newArray);



//8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

let anyValuesArray = ["Tetiana", "Oleksandr", 26, 32, true , 41 , false, "Olena"];
let filteredNumbersArray = [];

for (let i =0; i < anyValuesArray.length; i++) {
    if (typeof anyValuesArray[i] === "number" ) {
        filteredNumbersArray.push(anyValuesArray[i]);

    }
}

console.log(filteredNumbersArray);


// Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший

let valuesArray = [11,22,33,44,55,66,77,88,99,100];
let valuesCopyArray = [];

for (let i =0; i < valuesArray.length; i++) {
    valuesCopyArray.push(valuesArray[i]);
}
console.log(valuesCopyArray);



//– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.

let stringArray = ['a', 'b', 'c'];
let resultArray = "";
for (let i =0; i < stringArray.length; i++) {
    resultArray += stringArray[i];
}
console.log(resultArray);

//– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.

let stringArray1 = ['a', 'b', 'c'];
let resultArray2 = "";


let i = 0;
while (i < stringArray1.length) {
    resultArray2 += stringArray1[i];
    i++;


}


//– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.


let elementsArray = ['a', 'b', 'c'];
let resultForOf = "";

 for (let element of elementsArray) {
     resultForOf += element;
 }

 





