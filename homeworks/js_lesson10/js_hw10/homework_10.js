//#sH8c4er

const button = document.getElementById('btn');

button.onclick = function(){
    document.getElementById('text').remove();
}

//#j693ca8

let ageInput= document.getElementById('ageInput');

const buttonConfirmAge = document.getElementById('btn1');

buttonConfirmAge.addEventListener('click', function(){
    let age = ageInput.value;
     if(age === '' || age === '0'){
        alert('Please enter your age!');
    } else if(age < 18) {
        alert('You must be at least 18 years old to continue');
    }
    else{
        alert('Entry allowed! Welcome');
    }
})


//#ymAmN2xJ

// let inputName = document.getElementById('nameInput')
// let inputSurname= document.getElementById('surnameInput')
// let inputUserAge =  document.getElementById('userAgeInput')
// let buttonSubmit =document.getElementById('btn2')

let target = document.getElementById('target');
const someForm = document.forms.someForm

someForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const name = someForm.nameInput.value;
    const surname = someForm.surnameInput.value;
    const age = someForm.userAgeInput.value;
    let obj= {name, surname, age};
    console.log(obj);
    target.innerText = obj.name + ' ' + obj.surname + ' ' + obj.age;

})


//#2VaLt4vDczH

let currentNumber = +localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);

document.getElementById('result').innerText = currentNumber;


//#Jg0gPO00


const input = document.getElementById('xxx');
const resultDiv = document.getElementById('result2');
input.oninput = function(){
    const kilos = +this.value;
    let result = kilos * 2.2;
    resultDiv.innerText = result;
}


//#RbQGnH5DuC

function addToLocalStorage(arrayName,objToAdd) {
    if (!localStorage.getItem(arrayName)) {
        throw new Error('there is no such array');
    }

const array = JSON.parse(localStorage.getItem(arrayName));
if(typeof objToAdd === 'object' ) {
    array.push(objToAdd);
}

localStorage.setItem(arrayName, JSON.stringify(array));

}
addToLocalStorage('sessionList', {});



//#kUSgFqWY

const table = document.getElementById('table');
const tableGeneratorForm = document.forms['tableGeneratorForm'];


tableGeneratorForm.onsubmit = function(e) {
    e.preventDefault();
    const linesValue = +tableGeneratorForm.lines.value;
    const cellsValue = +tableGeneratorForm.cells.value;
    const dataValue = tableGeneratorForm.data.value;
    console.log(linesValue, cellsValue, dataValue);

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);

        }
        table.appendChild(tr);
    }
};


//#bq1zkx7WP

const div = document.getElementById('blockPrice')
let currentPrice = localStorage.getItem('price')

if(currentPrice === null) {
    currentPrice = 100;
    localStorage.setItem('price', currentPrice);
    localStorage.setItem('time', Date.now());

} else{
        currentPrice = Number(currentPrice);
        const lastTime= Number(localStorage.getItem('time'));
        const currentTime = Date.now();


        if(currentTime - lastTime > 10000) {
         currentPrice = currentPrice + 10;
         localStorage.setItem('price', String(currentPrice));
         localStorage.setItem('time', String(currentTime))

     }

    }
    div.innerText = currentPrice + 'грн';











