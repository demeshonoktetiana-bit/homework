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

let elementsArray = ['a', 'b', 'c', 'd', true, 1, 2, 3, false, 4];

for (let i =0; i<elementsArray.length; i++) {
    if (typeof elementsArray[i] === "boolean") {

        console.log(elementsArray[i]);

    }
}


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


//c)

let randomArray = [];

for (let i=0; i < 20; i++) {
  Math.random()


}

//d)









