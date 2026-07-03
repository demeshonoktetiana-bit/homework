//#XjJuucOMR0
//– Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User (id, name , surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const user = new User(1, 'Tetiana' , 'Demesh', 'email', '+38121212' );
console.log(user);

let arrUsers = [
    new User(1, 'Tetiana' , 'Demesh', 'email', '+38121212' ),
    new User(2 , 'Andrii' , 'Demesh', 'qqq', '+38545456' ),
    new User(3, 'Vasya', 'Asads', 'tgff', '+23234345'),
    new User(4, 'Anya', 'Fhjksdl', 'dttt', '+233434345'),
    new User(5, 'Liza', 'Ytioir', 'qqqq', '+237642345'),
    new User(6, 'Nastya', 'Jdsds', 'rrr', '+2398342215'),
    new User(7, 'Katya', 'Kfdf', 'sss', '+2321234345'),
    new User(8, 'Kolya', 'Thjdjs', 'cccc', '+4565345'),
    new User(9, 'Ola', 'Adsd', 'dddd', '+657234345'),
    new User(10, 'Bogdan', 'Aowq', 'dfdf', '+4565345')
];

console.log(arrUsers);




//#2ikXsE2WiKZ
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

const filterUsers = arrUsers.filter(user => user.id % 2 === 0 );
console.log(filterUsers);




//#pOeHKct
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortedUsers = arrUsers.sort((a , b) => a.id - b.id);
console.log(sortedUsers);



//#nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client


function Client (id, name , surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

function Product (title, price) {
    this.title = title;
    this.price = price;
}

let arrClient = [
    new Client(1,
        'Anna' , 'Aaa', 'abc', '+3812345', [
        new Product ('tv', 20000),
        ]),

    new Client(2, 'Lilia', 'Bbb', 'abc@abc', '+38121212', [
        new Product ('microwave', 30000),
        new Product ('phone', 14500),
        new Product ('blender', 5000),
        new Product ('Smartwatch', 8900)
        ]),


        new Client(3, 'Oleksandr', 'Ccc', 'oleks@gmail', '3834556', [
            new Product ('digital camera', 50000),
            new Product ('phone', 14500)

        ]),
        new Client (4, 'Dawid', 'Ddd' ,'dffgdgf', '432435', [
            new Product ('digital camera', 50670),
            new Product ('phone', 15500)
        ]),
        new Client (5, 'Dawid', 'Ddd' ,'dffgdgf', '432435', [
            new Product ('digital camera', 50670),
            new Product ('phone', 15500)
        ]),
        new Client (6, 'Tetiana', 'Dddmm' ,'dffgfggf', '432567675', [
            new Product ('camera', 50555),
            new Product ('phone', 15650),
            new Product ('fridge', 80000)

        ]),
        new Client (7, 'Igor', 'Dccc' ,'dfftyjf', '4321235', [
            new Product ('digital camera', 50670),
            new Product ('phone', 15500)
        ]),
        new Client (8, 'Oleg', 'Wasdf' ,'dffgdgf', '432435', [
            new Product ('digital camera', 50670),
            new Product ('headphones', 6000)
        ]),
        new Client (9, 'Nazar', 'Djkll' ,'dfdshjf', '48900425', [
            new Product ('digital camera', 50670),
            new Product ('phone', 15500)
        ]),
        new Client (10, 'Olya', 'Badz' ,'qwerty', '12341234456', [
            new Product ('game console', 20000),
            new Product ('phone', 15500)
        ])

];

console.log(arrClient);



//#8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

const sortedClients = arrClient.sort ((client1, client2) => client1.order.length - client2.order.length)
console.log(sortedClients);



//#vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car



// function Car(model , producer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.year = year;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//
//     this.info = function () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//
//     this.increaseMaxSpeed = function (speedToAdd) {
//         if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
//     };
//
//     this.changeYear = function (year) {
//         if (year > 1815) this.year = year;
//
//     };
//
//
//     this.addDriver = function (driver) {
//         if (driver) this.driver = driver;
//     };
//
// }
//
// const car = new Car('bbb', 'sdsfdf', 1935, 234, 3);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2017);
// car.addDriver({});
// console.log(car);



//#5kla3yMpgp

 class Car {

     constructor (model , producer, year, maxSpeed, engineVolume) {
         this.model = model;
         this.producer = producer;
         this.maxSpeed = maxSpeed;
         this.engineVolume = engineVolume;
         this.year = year;
     }
         drive() {
             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
         }

         info() {
             for (const key in this) {
                 console.log(key, this[key]);
             }
         }

         increaseMaxSpeed(speedToAdd) {
             if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
         }

        changeYear(year) {
             if (year > 1815) this.year = year;

         }


         addDriver(driver) {
             if (driver) this.driver = driver;
         }

 }

const car = new Car('bbb', 'sdsfdf', 1935, 234, 3);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2017);
car.addDriver({});
console.log(car);




//#zg6Fifnqig

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}


const cinderellas = [

    new Cinderella('aaa', 17, 35),
    new Cinderella('bbb', 18, 36),
    new Cinderella('ccc', 19, 37),
    new Cinderella('abc', 20, 38),
    new Cinderella('bcd', 21, 39),
    new Cinderella('cbd', 22, 40),
    new Cinderella('bfd', 23, 41),
    new Cinderella('asd', 24, 42),
    new Cinderella('dfg', 25, 43),
    new Cinderella('ghj', 26, 44)

]

const prince = new Prince('Vasya', '20', 35);

//
// for (const cinderella of cinderellas) {
//
//     if(cinderella.footSize === prince.shoe) {
//         prince.wife = cinderella;
//     }
// }

const mainCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.shoe);
prince.wife = mainCinderella;

console.log(mainCinderella);
console.log(prince);



//#gsKLAsNWM

Array.prototype.myForEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}
const numbers = [1,2,3,4,5];

numbers.myForEach(function (element) {
    console.log(element);
});


Array.prototype.myFilter = function(callback) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
    if(callback(this[i])) {
        result.push(this[i]);
    }
}
    return result;
}

const filteredNumbers = numbers.myFilter(number => number % 2 === 0 );
console.log(filteredNumbers);






