//#WpkK0ZH1
// –створити масив з:
//
//     – з 5 числових значень
//
// – з 5 стічкових значень
//
// – з 5 значень стрічкового, числового та булевого типу
//
// – та вивести його в консоль

// let arr;
// arr = [1,2,3,4,5];
// console.log(arr);
//
// let arr1;
// arr1 = ['hello', 'world', 'okten', 'is', 'cool'];
// console.log(arr1);
//
// let arr2;
// arr2 = [true, false, 1, 2, 'hello'];
// console.log(arr2);
// console.log(typeof arr2[0]);
// console.log(typeof arr2[2]);
// console.log(typeof arr2[4]);



//#4aDbSgh

// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль

// let arr3 = [];
// arr3[0] = 'hello';
// arr3[1] = 'my';
// arr3[2] = 'name';
// arr3[3] = 'is';
// arr3[4] = 'Tetiana';
// console.log(arr3);
//


//#qLQLJSeN7i

// – є масив [2,17,13,6,22,31,45,66,100,-18] :
//
// 1. перебрати його циклом while
//
//     2. перебрати його циклом for
//
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// 7. замінити кожне число, кратне 3, на слово “okten”
//
// 8. вивести масив у зворотньому порядку.
//
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)


// 1.

// let arr4 = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
//
// while (i < arr4.length) {
//     console.log(arr4[i]);
//     i++;
// }


//2.

// for (let i=0; i<arr4.length; i++) {
//     console.log(arr4[i]);
// }



//3.

// let i= 0;
//
// while (i <arr4.length) {
//     if (arr4[i] % 2 !==0) {
//         console.log(arr4[i]);
//      }
//        i++;
//    }


//4.

// let i = 0;
//
// for (i = 0; i < arr4.length; i++) {
//
//     if (arr4[i] % 2 !== 0) {
//         console.log(arr4[i]);
//     }
// }



//5.

//  i = 0;
//
// while (i < arr4.length) {
//     if (arr4[i] % 2 ===0) {
//         console.log(arr4[i]);
//     }
//     i++;
// }



//6.

//
// for (i = 0; i < arr4.length; i++) {
//     if (arr4[i] % 2 ===0) {
//         console.log(arr4[i]);
//     }
//
// }



//7.

// for (i = 0; i < arr4.length; i++) {
//     if (arr4[i] % 3 === 0) {
//         arr4[i] = "okten";
//     }
// }
// console.log(arr4);


//8.

//
// for (i = arr4.length -1 ; i >= 0; i--) {
//     console.log(arr4[i]);
//
// }



//9.

// let arr = [2,17,13,6,22,31,45,66,100,-18]
// let i = arr.length - 1;
//
// while (i >= 0) {
//     console.log(arr[i]);
//     i --;
// }




// let arr = [2,17,13,6,22,31,45,66,100,-18]
//
// for (let i = arr.length-1; i>=0; i--) {
//     console.log(arr[i])
//
// }


//
// let arr = [2,17,13,6,22,31,45,66,100,-18]
//
// let i = arr.length - 1;
//
// while (i >= 0) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i--;
// }



// let arr = [2,17,13,6,22,31,45,66,100,-18]
//
// for (let i= arr.length -1; i >=0; i--) {
//     if (arr[i] % 2 !==0) {
//         console.log(arr[i]);
//     }
//
// }


// let arr = [2,17,13,6,22,31,45,66,100,-18]
// let i = arr.length -1;
//
// while (i >= 0) {
//     if (arr[i] % 2 ===0) {
//         console.log(arr[i]);
//     }
//     i--;
// }


// let arr = [2,17,13,6,22,31,45,66,100,-18]
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }


// let arr = [2,17,13,6,22,31,45,66,100,-18]
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 3 ===0) {
//         arr[i] = "okten";
//     }
//     console.log(arr[i]);
// }
//

