//#67kfznmiMl

let arr = ['hello', 'okten', 2026, true, false, {name: 'Tetiana'}, {age: 26}, 'a', 'b', 'c'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


//#LARqoUj5I

let book1 = {title: 'Harry Potter', pageCount: 223, genre: 'Fantasy'};
let book2 = {title: 'The Chronicles of Narnia', pageCount: 206, genre: 'Fantasy'};
let book3 = {title: 'The Little Prince', pageCount: 96, genre: 'Novella'};
console.log(book1);
console.log(book2);
console.log(book3);


//#sA3Gg1sCp

let book4 = {
    title: 'Harry Potter',
    pageCount: 223,
    genre: 'Fantasy',
    authors: [
        {name: 'J.K. Rowling', age: 60},
        {name: 'J.K. Rowling', age: 60}
    ]
}

let book5 = {
    title: 'Harry Potter',
    pageCount: 206,
    genre: 'Fantasy',
    authors: [
        {name: 'J.K. Rowling', age: 60},
        {name: 'J.K. Rowling', age: 60}
    ]
}

let book6 = {
    title: 'Harry Potter',
    pageCount: 207,
    genre: 'Fantasy',
    authors: [
        {name: 'J.K. Rowling', age: 60},
        {name: 'J.K. Rowling', age: 60}
    ]
}

console.log(book4);
console.log(book5);
console.log(book6);


//#jCHFnEbdmFd

let users = [
    {name: 'Vasya', username: 'Vasya11', password: 'password123'},
    {name: 'Olya', username: 'Olya12', password: 'password345'},
    {name: 'Nastya', username: 'Nastya13', password: 'password445'},
    {name: 'Tanya', username: 'Tanya14', password: 'password545'},
    {name: 'Oleksandr', username: 'Oleksandr15', password: 'password645'},
    {name: 'Anna', username: 'Anna16', password: 'password745'},
    {name: 'Vanya', username: 'Vanya14', password: 'password845'},
    {name: 'Katya', username: 'Katya14', password: 'password945'},
    {name: 'Denis', username: 'Denis15', password: 'password945'},
    {name: 'Vlad', username: 'Vlad17', password: 'password945'},

]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


//#coYydZuaeEB

let temps = [
    {dayOfWeek: 'Mon', morning: 15, day: 22, evening: 17},
    {dayOfWeek: 'Tues', morning: 20, day: 30, evening: 17},
    {dayOfWeek: 'Wed', morning: 20, day: 25, evening: 18},
    {dayOfWeek: 'Thu', morning: 25, day: 30, evening: 17},
    {dayOfweek: 'Fri', morning: 25, day: 25, evening: 17},
    {dayOfweek: 'Sat', morning: 25, day: 25, evening: 17},
    {dayOfweek: 'Sun', morning: 25, day: 25, evening: 17},
]
console.log(temps);


//#bAUsaq6LI

// let x = 1;
//
// if (x !== 0) {
//     console.log('right');
// } else {
//     console.log('wrong');
// }
//
// x = 0;
// if (x !== 0) {
//     console.log('right');
// } else {
//     console.log('wrong');
// }
// x = -3;
// if (x !== 0) {
//     console.log('right');
// } else {
//     console.log('wrong');
// }


//#3ckURgvs

let time = 46;
if (time >= 0 && time < 15) {
    console.log('1')

} else if (time >= 15 && time < 30) {
    console.log('2')
} else if (time >= 30 && time < 45) {
    console.log('3')
} else if (time >= 45 && time < 60) {
    console.log('4')
}


//#3ckURgvs


let day = 11

if (day >= 1 && day <= 10) {
    console.log('1');
} else if (day > 10 && day <= 20) {
    console.log('2');
} else if (day > 20 && day <= 31) {
    console.log('3');
}


//#KzrtqyQ


switch (6) {
    case 1:
        console.log('aaaa');
        console.log('bbbb');
        console.log('cccc');
        break;

    case 2:
        console.log('bbbb');
        console.log('cccc');
        console.log('cccc');
        break;

    case 3:
        console.log('bbbb');
        console.log('cccc');
        console.log('ddd');
        break;

    case 4:
        console.log('bbbb');
        console.log('cccc');
        console.log('cccc');
        break;

    case 5:
        console.log('abc');
        console.log('cccc');
        console.log('ddd');
        break;

    case 6:
        console.log('bbbb');
        console.log('cccc');
        console.log('cccc');
        break;

    case 7:
        console.log('aaa');
        console.log('bbb');
        console.log('ccc');
        break;
}

//#uwsz1RnTQJ1

let a = 10;
let b = 20;

if (a>b) {
    console.log(a);
}else if (b>a) {
    console.log(b);
}else if (a===b) {
    console.log('===');
}


//#iBvqtjEm


let x = null;
if (!x) {
    x = 'default';
}
console.log(x)


//#awLXL6TBzg

coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration>5) {
    console.log('super')
}
if (coursesAndDurationArray[1].monthDuration>5) {
    console.log('super')
}
if (coursesAndDurationArray[2].monthDuration>5) {
    console.log('super')
}
if (coursesAndDurationArray[3].monthDuration>5) {
    console.log('super')
}
if (coursesAndDurationArray[4].monthDuration>5) {
    console.log('super')
}
if (coursesAndDurationArray[5].monthDuration>5) {
    console.log('super')
}
