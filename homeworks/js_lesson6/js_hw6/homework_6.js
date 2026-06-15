//#dFeorS3m7u
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’

let s1 =  'hello world';
console.log(s1.length);
let s2 = 'lorem ipsum';
console.log(s2.length);
let s3 =  'javascript is cool';
console.log(s3.length);


//#8lld9HMxXWB Перевести до великого регістру наступні стрінгові значення ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’


let  text1 = 'hello world';
console.log(text1.toUpperCase());
let text2 = 'lorem ipsum';
console.log(text2.toUpperCase());
let text3 = 'javascript is cool';
console.log(text3.toUpperCase());


//#ClDsAm7xba7 – Перевести до нижнього регістру наступні стрінгові значення - ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

let str1 = 'HELLO WORLD';
console.log(str1.toLowerCase());
let str2 = 'LOREM IPSUM';
console.log(str2.toLowerCase());
let str3 = 'JAVASCRIPT IS COOL';
console.log(str3.toLowerCase());


//#0b89BkYZwu – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.


let str = ' dirty string   '

const s = str.trim();
console.log(s);
console.log(str.length);
console.log(s.length);


//#bfoJuse4ZzP Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
//     let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]


function stringToarray(str) {
    if (str) {
        const split = str.split(' ');
        return split;
    }
    return [''];
}

console.log(stringToarray('Ревуть воли як ясла повні'));


//#Rbr5kEQ – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0];

const strings = numbers.map(number => number + '');
console.log(strings);



//#5hqyKTfmc
//
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
// let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]


function sortNums(arrayOfnums, direction) {
    if (direction === 'ascending') return arrayOfnums.sort((a,b) => a - b) ;
    if (direction === 'descending') return arrayOfnums.sort((a,b) => b - a) ;
}

let nums = [11,21,3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));




//#yo06d74c1C
//— відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

{title: 'Java Complex', monthDuration: 6},

{title: 'Python Complex', monthDuration: 6},

{title: 'QA Complex', monthDuration: 4},

{title: 'FullStack', monthDuration: 7},

{title: 'Frontend', monthDuration: 4}

];

const map1 = coursesAndDurationArray
.sort((a, b) => b.monthDuration - a.monthDuration)
.filter(value => value.monthDuration > 5)
.map((value, index) => ({...value , id: index + 1}));

console.log(map1);





//#4LJn7zBx

//–написати пошук всіх об’єктів, в яких в modules є sass
// –написати пошук всіх об’єктів, в яких в modules є docker


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(course => {
    return course.modules.includes('sass')
}));

console.log(coursesArray.filter(course => {
    return course.modules.includes('docker')
}));



//#bolvdlhP

let cardSuit = ['spade', 'diamond','heart', 'club'];
let value = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
let color = ['red', 'black'];

let cards = [];

for (let suit of cardSuit) {
    for (let val of value) {
        if(suit === 'diamond' || suit === 'heart') {
          color = 'red';
        } else {
           color = 'black';
        }
        cards.push({cardSuit: suit, value: val , color: color});
        }
}

console.log(cards);


let findAce = cards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(findAce);


let filtered = cards.filter(card => card.value === '6');
console.log(filtered);

let filterRedCards = cards.filter(card => card.color === 'red');
console.log(filterRedCards);


let filterDiamondCards = cards.filter(card => card.cardSuit === 'diamond');
console.log(filterDiamondCards);

let filterClubsCards = cards.filter(card => card.cardSuit === 'clubs' && !['6','7','8'].includes(card.value));
console.log(filterClubsCards);




let cardSuitReduce = cards.reduce ((accumulator , card) => {
         if(card.cardSuit === 'spade') {
             accumulator.suitSpades.push(card)
         }else if(card.cardSuit === 'diamond') {
             accumulator.suitDiamond.push(card);
         }else if(card.cardSuit === 'heart') {
             accumulator.suitHeart.push(card);
         }else if(card.cardSuit === 'club') {
             accumulator.suitClubs.push(card);
         }

          return accumulator;

}, { suitSpades: [] , suitDiamond: [], suitHeart: [], suitClubs: [] });

console.log(cardSuitReduce);






